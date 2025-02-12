# Authentication
# by Sakib Rasul

# Objectives
# 1. Set up Flask, SQLAlchemy, SerializerMixin, and Alembic.
# 2. Import `session` from `flask` to set and get cookies.
# 3. Import `make_response` from `flask` to create responses.
# 4. Import `Resource` and `Api` from `flask_restful` to
#    enable class-based routes. 
# 5. Set up `python-dotenv` to read variables in `.env`.
# 6. Set up `flask_cors` to allow requests from foreign domains.
# 7. Set up `flask_bcrypt` to translate passwords to/from hashes.
# 8. Set up an instance of `Api`. 
# 9. Create a `User` model with a `username`,
#    `password_hash`, `password`, and `authenticate()`.
# 10. Write a route for creating a new user.
# 11. Create an account.
# 12. Write a route for logging in an existing user.
# 13. Log in, and inspect your client's cookies.
# 14. Write a route for retrieving the current user's details.
# 15. Get the current user's details.
# 16. Write a route for logging out the current user.

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from sqlalchemy_serializer import SerializerMixin
from flask_migrate import Migrate

# We'll use `session` to set and read a user's **cookies**,
# i.e. things we'd like to remember about a user's visit
# to our website (e.g. their ID).
# We can optionally use `make_response` to enable a more
# flexible way of crafting return values.
from flask import Flask, jsonify, request, session, make_response

# Flask-RESTful is an extension for Flask that provides
# an alternative way of building routes, via classes
# `Resource` and `Api`.
from flask_restful import Resource, Api

# We'll use python-dotenv to load variables from `.env`... 
from dotenv import load_dotenv
# ...into `os.environ`, which by default only has access to
#    variables in your global environment
#    (e.g. via `export VARIABLE_NAME = VALUE`).
import os

# We'll use `flask_cors` to allow requests to our Flask
# application from other domains, e.g. our React application.
from flask_cors import CORS

# We'll use `flask_bcrypt` to create and read password **hashes**.
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

# In order to prevent anyone but us from modifying our cookies,
# we'll **sign** them with a secret key, loaded from our
# environment variables.
load_dotenv()
app.secret_key = os.environ.get("FLASK_SECRET_KEY")

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# This line allows requests to our Flask application from
# other domains, e.g. our React application.
CORS(app)

# This line initializes an instance of Flask-Bcrypt,
# which we'll use to securely store and verify user passwords.
bcrypt = Bcrypt(app)

# This line initializes an instance of Flask-RESTful's API,
# which we'll use to connect routing methods to endpoints.
api = Api(app)

class User(db.Model, SerializerMixin):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    # Usernames should generally be unique and non-nullable.
    username = db.Column(db.String, unique=True, nullable=False)
    # It isn't a great idea to store plaintext passwords in
    # a database - we'll store **hashes** of them instead!
    password_hash = db.Column(db.String)

    # A `password` property allows us to securely set passwords with hashes.
    @property
    def password(self):
        raise Exception("We don't know your password, only your hash!")
    @password.setter
    def password(self, value):
        # Take the given password, **hash** it, and return the hash as a string.
        self.password_hash = bcrypt.generate_password_hash(value).decode("utf-8")

    # Returns True if a given password matches the instance's `password_hash`.
    def authenticate(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

@app.post("/users")
def create_user():
    data = request.json
    try:
        new_user = User(username=data["username"])
        # Since `password` is a property, we can't pass it in above.
        new_user.password = data["password"]
        db.session.add(new_user)
        db.session.commit()
        return jsonify(new_user.to_dict()), 201
        # ...or return make_response(jsonify(new_user.to_dict()), 201)
    except IntegrityError:
        return jsonify({ "Error": "Username not given or already registered." }, 400)
        # ...or return make_response(jsonify({"Error": "..."}), 400)
    except Exception as error:
        return jsonify({ "Error": str(error) }), 400
        # ...or return make_response(jsonify({"Error": str(error)}), 400)

@app.post("/login")
def login():
    # Get the user's proposed credentials.
    data = request.json
    # Lookup those credentials in the database.
    user = User.query.filter_by(username=data["username"]).first()
    # Check if the row exists *AND* if the given password is correct.
    if user and user.authenticate(data["password"]):
        # We can "log in" the user by
        # saving their `id` into a session cookie.
        # Note that this is a very simple form of authentication.
        # For a more secure approach, consider tools like
        # Flask-Login and JWT tokens.
        session["user_id"] = user.id
        return jsonify(user.to_dict()), 201
        # ...or return make_response(jsonify(user.to_dict()), 201)
    else:
        # The response status code 401 is short for "unauthorized".
        return jsonify({ "Error": "Invalid username or password." }), 401
        # ...or return make_response(jsonify({"Error": "..."}), 401)
    
@app.get("/current-user")
def get_current_user():
    # If a user is logged in, their ID should be stored in
    # the cookie named "user_id".
    user_id = session.get("user_id")
    if user_id:
        user = User.query.get(user_id)
        # This line should break the route, since it tries
        # to read forbidden property, a user's plaintext password.
        # print(user.password)
        return jsonify(user.to_dict()), 200
        # ...or return make_response(jsonify(user.to_dict()), 200)
    else:
        # The response status code 401 is short for "no content",
        # i.e. no one is logged in.
        return "", 204
        # ...or return make_response("", 204)

@app.delete("/logout")
def logout():
    # Remove or clear the cookie "user_id" from the session.
    # If it doesn't exist, return the default value `None`.
    session.pop("user_id", None)
    # The response status code 401 is short for "no content",
    # i.e. no one is logged in.
    return "", 204
    # ...or return make_response("", 204)

# (Optional) Refactoring with Flask-RESTful
# If we have a class inherit from `Resource`,
# it can redefine instance methods
# `get`, `post`, `patch`, and `delete`,
# which we can later map to endpoints with `api`.
class UserResource(Resource):
    def post(self):
        data = request.json
        try:
            new_user = User(username=data["username"])
            new_user.password = data["password"]
            db.session.add(new_user)
            db.session.commit()
            # Flask-RESTful automatically converts
            # responses into JSON, so we don't need
            # to write `jsonify(...)`!
            return new_user.to_dict(), 201
        except IntegrityError:
            return { "Error": "Username not given or already registered!" }, 400
        except Exception as error:
            return { "Error": str(error) }, 400

class SessionResource(Resource):
    def post(self):
        data = request.json
        user = User.query.filter_by(username=data["username"]).first()
        if user and user.authenticate(data["password"]):
            session["user_id"] = user.id
            return user.to_dict(), 201
        else:
            return { "Error": "Invalid username or password." }, 401
    
    def get(self):
        user_id = session.get("user_id")
        if user_id:
            user = User.query.get(user_id)
            return user.to_dict(), 200
        else:
            return "", 204

    def delete(self):
        session.pop("user_id", None)
        return "", 204

# `api.add_resource(<Resource>, <endpoint>)`
# maps the methods in <Resource> to <endpoint>.
api.add_resource(UserResource, "/users")
api.add_resource(SessionResource, "/session")


# ~ Challenges
# 1. Create a one-to-many relationship between User and a new model of your choice.
# 2. Write a POST route that associates a new instance of your new model to the
#    current user.
# 2. Add a GET route that returns the instances of your new model associated
#    with the current user.