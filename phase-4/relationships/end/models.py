from config import db, association_proxy, SerializerMixin

# ~ One-to-Many Relationships
# One building can have many tenants,
# but a tenant lives in one building at a time.

class Building(db.Model, SerializerMixin):
    __tablename__ = "buildings"

    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String)
    # 2. Create a data attribute that links the instance to related rows
    #    with db.relationship("Class", back_populates="foreign_relationship").
    #    It's also a good, but optional, idea to indicate **cascading** behaviors
    #    by populating the `cascade` parameter with one or more of the following values:
    #    - "save-update": when an instance is added to the database,
    #    (on by default)  add any related instances as well.
    #    - "merge": when adding multiple instances to the database,
    #    (on by default) don't commit over any duplicates.
    #    - "delete": when an instance is deleted, delete its children.
    #    (off by default)
    #    - "all": equivalent to writing
    #             db.relationship(..., cascade="save-update, merge, delete")
    #    - "delete-orphan": when an instance's parent is deleted, delete the instance.
    #    (off by default)
    tenants = db.relationship("Tenant", back_populates="building")

    # 3. (Optional) Have the model inherit from SerializerMixin
    #    and use `serialize_rules` to "include" and/or "-exclude" data attributes
    #    (incl. those from relationships) from being serialized with to_dict().
    #    Here, for example, we're saying that when to_dict() is called,
    #    `tenants` should be a key, but that each tenant's `building`
    #    should be excluded.
    serialize_rules = ("tenants", "-tenants.building")
    # Note: We can override `serialize_rules`
    #       by defining `to_dict()`, as seen below.
    # def to_dict(self):
    #     return { "id": self.id, "address": self.address }

class Tenant(db.Model, SerializerMixin):
    __tablename__ = "tenants"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    # 1. Create a foreign key on the -many side with db.ForeignKey("table.column")
    building_id = db.Column(db.Integer, db.ForeignKey("buildings.id"))
    # 2. Create a data attribute that links the instance to related rows
    #    with db.relationship("Class", back_populates="foreign_relationship")
    building = db.relationship("Building", back_populates="tenants")

    # 3. (Optional) Have the model inherit from SerializerMixin
    #    and use `serialize_rules` to "include" and/or "-exclude" data attributes
    #    (incl. those from relationships) from being serialized with to_dict().
    #    Here, for example, we're saying that when to_dict() is called,
    #    `building` should be a key, but that each building's `tenants`
    #    should be excluded.
    serialize_rules = ("building", "-building.tenants")
    # Note: We can override `serialize_rules`
    #       by defining `to_dict()`, as seen below.
    # def to_dict(self):
    #     return { "id": self.id, "name": self.name, "building_id": self.building_id }

# ~ Many-to-Many Relationships
# Platforms can release many games,
# and games can be released on many platforms.

class Platform(db.Model):
    __tablename__ = "platforms"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    # 2a. Access instances in the (directly related) association model.
    releases = db.relationship("Release", back_populates="platform")
    # 3a. Use `association_proxy("relationship", "nested_relationship")`
    #     to access instances in the indirectly related model.
    games = association_proxy("releases", "game")
    def to_dict(self):
        return { "id": self.id, "name": self.name }

# 1a. Create an association model to act as an intermediary
#     between the two sides of the many-to-many relationship.
class Release(db.Model):
    __tablename__ = "releases"
    id = db.Column(db.Integer, primary_key=True)
    # 1b. Add foreign keys and relationships to the related tables.
    platform_id = db.Column(db.Integer, db.ForeignKey("platforms.id"))
    platform = db.relationship("Platform", back_populates="releases")
    game_id = db.Column(db.Integer, db.ForeignKey("games.id"))
    game = db.relationship("Game", back_populates="releases")
    def to_dict(self):
        return { "id": self.id,
                 "platform_id": self.platform_id, "game_id": self.game_id }

class Game(db.Model):
    __tablename__ = "games"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    # 2b. Access instances in the (directly related) association model.
    releases = db.relationship("Release", back_populates="game")
    # 3b. Use `association_proxy("relationship", "nested_relationship")`
    #     to access instances in the indirectly related model.
    platforms = association_proxy("releases", "platform")
    def to_dict(self):
        return { "id": self.id, "name": self.name }