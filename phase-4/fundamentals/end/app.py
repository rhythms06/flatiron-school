# Phase 4: Fundamentals
# by Sakib Rasul

# The reason we learned Python and SQLite earlier was so
# that we could create relational databases.
# However, a database isn't of much (public) use unless it's
# accessible from a client, i.e. a browser.

# That's where **Flask** comes in, a popular backend web
# framework for Python. Flask creates a server (i.e. a URL)
# that can listen for HTTP requests (e.g. with `fetch()`)
# and respond to them by running functions written in Python.

# To make it even easier to create and interact with our ORMs
# in said functions, we'll use **SQLAlchemy** and **Alembic**.
# **SQLAlchemy** is an ORM built specifically for Python, and
# **Alembic** is a database migration tool built for SQLAlchemy.

# To get started...
# 1. Write some ORMs, or **models**, with SQLAlchemy.
# 2. Create a virtual environment with `pipenv --python [version]`.
# 3. Run `pipenv install flask flask-sqlalchemy flask-migrate`.
# 4. Enter your virtual environment with `pipenv shell`.
# 5. Initialize a database based on your **models** with
#    `flask db init`, `flask db migrate -m "init"`, and `flask db upgrade`.
# 6. Interact with or run your Flask application with
#    `flask shell` or `flask run`.

# Flask is a backend web framework for Python.
from flask import Flask, jsonify
# Add support for SQLAlchemy, a Python ORM, to Flask.
from flask_sqlalchemy import SQLAlchemy
# Add support for Alembic, a migrations tool, to Flask.
from flask_migrate import Migrate

# Configure a new Flask application.
app = Flask(__name__)
# Connect the new Flask app to a SQLite database.
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///main.db"
# Disable Flask-SQLAlchemy's event listeners.
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
# Make responses easier to read (for development purposes).
app.json.compact = False

# Initialize a new ORM with SQLAlchemy.
db = SQLAlchemy(app)
# Configure Alembic.
migrate = Migrate(app, db)

# Create a new object-relational mapping using SQLAlchemy.
class Musician(db.Model):
    __tablename__ = "musicians"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)

# A **route** in Flask is an **endpoint** that a **client**
# can make a **request** to and expect a **response** from.
@app.get("/")
def index():
    return "Hello!"

# This route calls on SQLAlchemy to return rows from a table!
@app.get("/musicians")
def get_musicians():
    return jsonify([
        { "id": musician.id, "name": musician.name }
        for musician in Musician.query.all()
    ])