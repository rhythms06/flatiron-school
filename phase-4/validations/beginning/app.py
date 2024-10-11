# Validations and Constraints
# by Sakib Rasul

# Objectives
# 1. Add constraints unique, nullable, default.
# 2. Use @validates to reject invalid input.
# 3. Use @validates to sanitize input.
# 3. Handle errors in routes.

from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.exc import IntegrityError
from flask_migrate import Migrate

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///main.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

app.json.compact = False

db = SQLAlchemy(app)

migrate = Migrate(app, db)

class Company(db.Model, SerializerMixin):
    __tablename__ = "companies"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    country = db.Column(db.String, default="United States")
    phone = db.Column(db.String)

    @validates("name")
    def validate_name(self, key, value):
        if not type(value) == str:
            raise TypeError("name must be a string.")
        return value
    
    @validates("phone")
    def validate_phone_number(self, key, value):
        phone_number = value.replace("-", "")
        if not all(character.isdigit() for character in phone_number):
            raise ValueError("phone_number must only contain digits.")
        return phone_number
    
@app.post("/companies")
def found_company():
    data = request.json
    try:
        company = Company(**data)
        db.session.add(company)
        db.session.commit()
        return jsonify(company.to_dict()), 201
    except IntegrityError as error:
        return jsonify({ "IntegrityError": str(error)} ), 400
    except TypeError as error:
        return jsonify({ "TypeError": str(error)} ), 400
    except ValueError as error:
        return jsonify({ "ValueError": str(error)} ), 400

# ~ Challenges
# 1. Add an email_address data attribute that must have exactly one @ in it.
# 2. Add a zip_code data attribute that:
#    (a) is exactly five digits long
#    (b) is between 00501 and 99950, inclusive.
