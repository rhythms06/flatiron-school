# Phase 4: Routing
# by Sakib Rasul

# Core Deliverables
# 1. Install Flask.
# 2. Configure a new Flask application.
# 3. Install Flask-SQLAlchemy and Flask-Migrate.
# 4. Create and populate a new database.
# 5. Write a GET route that fetches all rows from a table.
# 6. Write a POST route that adds one row.
# 7. Write an instance method to_dict() to support serialization.
# 8. Try --port, --debug, FLASK_RUN_PORT, FLASK_ENV.
# 9. Use Postman to start testing your routes.
# 10. Write a GET route that fetches one row.
# 11. Write a PATCH route that updates one row.
# 12. Write a DELETE route that removes one row.

from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///main.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)

class Sandwich(db.Model):
    __tablename__ = "sandwiches"

    id = db.Column(db.Integer, primary_key = True)
    bread = db.Column(db.String)
    filling = db.Column(db.String)

    def to_dict(self):
        return { "id": self.id, "bread": self.bread, "filling": self.filling }

@app.get("/")
def index():
    return jsonify({ "message": "Hello, world!" })

# Handle requests to read all rows in a table.
@app.get("/sandwiches")
def get_sandwiches():
    return jsonify([ sandwich.to_dict() for sandwich in Sandwich.query.all() ])

# Handle requests to add a row to a table.
@app.post("/sandwiches")
def make_a_sandwich():
    recipe = request.json
    try:
        new_sandwich = Sandwich(bread=recipe["bread"], filling=recipe["filling"])
        # ...or use **dictionary unpacking**: new_sandwich = Sandwich(**recipe)
        db.session.add(new_sandwich)
        db.session.commit()
        return jsonify(Sandwich.query.order_by(Sandwich.id.desc()).first().to_dict()), 201
    except Exception as exception:
        return jsonify({ "error": str(exception) }), 400

# Handle requests to read one row from a table.
@app.get("/sandwiches/<int:id>")
def get_sandwich_by_id(id):
    sandwich = Sandwich.query.where(Sandwich.id == id).first()
    if sandwich:
        return jsonify(sandwich.to_dict()), 200
    else:
        return jsonify({ "error": "That sandwich does not exist." }), 404
    
# Handle requests to update one row in a table.
@app.patch("/sandwiches/<int:id>")
def update_sandwich(id):
    sandwich = Sandwich.query.where(Sandwich.id == id).first()
    if sandwich:
        try:
            recipe = request.json
            for key in recipe:
                setattr(sandwich, key, recipe[key])
            db.session.add(sandwich)
            db.session.commit()
            return jsonify(Sandwich.query.where(Sandwich.id == id).first().to_dict()), 200
        except Exception as exception:
            return jsonify({ "error": str(exception) }), 400
    else:
        return jsonify({ "error": "That sandwich does not exist." }), 404

# Handle requests to remove one row from a table.
@app.delete("/sandwiches/<int:id>")
def eat_sandwich(id):
    sandwich = Sandwich.query.where(Sandwich.id == id).first()
    if sandwich:
        try:
            db.session.delete(sandwich)
            db.session.commit()
            return "", 204
        except Exception as exception:
            return jsonify({ "error": str(exception) }), 400
    else:
        return jsonify({ "error": "That sandwich does not exist." }), 404



