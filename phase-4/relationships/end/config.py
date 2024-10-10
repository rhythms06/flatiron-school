from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from flask_migrate import Migrate

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///main.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

app.json.compact = False

db = SQLAlchemy(app,
# Enforce the naming convention "fk_[table]_[foreign table]_[column]"
# (e.g. "fk_releases_games_game_id") for all foreign key constraints,
# so that alembic doesn't stress out when adding foreign keys to
# existing tables in our database.
  metadata=MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(referred_table_name)s_%(column_0_name)s"
  })
)
migrate = Migrate(app, db)