# Phase 4: Fundamentals
# by Sakib Rasul

# Core Deliverables
# 1. Install Flask.
# 2. Configure a new Flask application.
# 3. Write an index route.
# 4. Test the route.
# 5. Install Flask-SQLAlchemy and Flask-Migrate.
# 6. Create and populate a new database.
# 7. Write a route that interacts with the database.
# 8. Test the route.

from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

#initialize a new instance of flas called 'app'
app = Flask(__name__)
#opt-out of SQAlchemy's built-in "VCS-lite" behaviors
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///main.db" #config setting to tell flask where db exists
# missed this part of lecture:
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
#Allow Flask's responses to be verbose
app.json.compact = False

# Initializing an instance of SQLAlchemy around our Flask 'app'
db = SQLAlchemy(app)
#Initializing an instance of Alembic/Migrate around 'app' and 'db'
migrate = Migrate(app, db)

class Emotion(db.Model):
    __tablename__ = "emotions"
    #Create (a) an instance date attribute ‘id’ and (b) an integer primary key column ‘id’
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)

#Handle what happens when the user makes a GET request to "/" enpoint
@app.get("/")
def index():
    return "Hello!"
    #this returns just "Hello!"
    #alt:
    #return jsonify({"message": "Hello!"})
    # This returns json syntax

# When a user makes a GET request to /emotions, run this function
@app.get("/emotions")
def get_all_emoions():
    return jsonify([ 
        # <expression>
        {"id": emotion.id, "name": emotion.name }
        #< for <thing> in <sequence>
        for emotion in Emotion.query.all()
    ])