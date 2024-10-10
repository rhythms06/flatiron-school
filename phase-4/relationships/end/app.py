# Phase 4: Relationships
# Sakib Rasul

# Objectives
# 1. Create a one-to-many relationship and access instances in a directly related model
#    with `db.relationship("Class", back_populates="foreign_relationship", cascade="...")`
#    and `db.ForeignKey("tablename.primary_key")`.
# 2. Serialize relationships with `SerializerMixin`,
#    `serialize_rules("include", "-exclude")`, and `to_dict()`.
# 3. Create a many-to-many relationship and access instances in indirectly related models
#    with `association_proxy("relationship", "nested_relationship")`.
# 4. Seed a database with faker, Faker(), and random.

from config import app, db, request, jsonify
from models import Building, Tenant, Platform, Release, Game

# ~ One-to-Many Relationships
# One building can have many tenants,
# but a tenant lives in one building at a time.

# Create a building
@app.post("/buildings")
def construct_building():
    try:
        data = request.json
        building = Building(address=data["address"])
        db.session.add(building)
        db.session.commit()
        return jsonify(
            Building.query.order_by(Building.id.desc()).first().to_dict()
        ), 201
    except Exception as exception:
        return jsonify({ "error": str(exception) }), 400

# Create a tenant
@app.post("/tenants")
def move_to_the_city():
    try:
        data = request.json
        tenant = Tenant(name=data["name"], building_id=data["building_id"])
        db.session.add(tenant)
        db.session.commit()
        return jsonify(
            Tenant.query.order_by(Tenant.id.desc()).first().to_dict()
        ), 201
    except Exception as exception:
        return jsonify({ "error": str(exception) }), 400

# Get a building
@app.get("/buildings/<int:id>")
def inspect_building(id):
    building = Building.query.where(Building.id == id).first()
    if building:
        return jsonify(building.to_dict()), 200
    else:
        return jsonify({ "error": "Building not found." }), 404

# Get a building's tenants
@app.get("/buildings/<int:id>/tenants")
def my_tenants(id):
    building = db.session.get(Building, id)
    if building:

        return jsonify([ tenant.to_dict() for tenant in building.tenants ]), 200
    else:
        return jsonify({ "error": "Building not found." }), 404

# Get a tenant
@app.get("/tenants/<int:id>")
def background_check(id):
    tenant = db.session.get(Tenant, id)
    if tenant:
        return jsonify(tenant.to_dict()), 200
    else:
        return jsonify({ "error": "Tenant not found." }), 404

# Get a tenant's building
@app.get("/tenants/<int:id>/building")
def where_do_i_live(id):
    tenant = db.session.get(Tenant, id)
    if tenant:
        return jsonify(tenant.building.to_dict()), 200
    else:
        return jsonify({ "error": "Tenant not found." }), 404

# ~ Many-to-Many Relationships
# Platforms can release many games,
# and games can be released on many platforms.

# Create a platform
@app.post("/platforms")
def launch_platform():
    try:
        data = request.json
        platform = Platform(name=data["name"])
        db.session.add(platform)
        db.session.commit()
        return jsonify(
            Platform.query.order_by(Platform.id.desc()).first().to_dict()
        ), 201
    except Exception as exception:
        return jsonify({ "error": str(exception) }), 400

# Create a game
@app.post("/games")
def develop_game():
    try:
        data = request.json
        game = Game(name=data["name"])
        db.session.add(game)
        db.session.commit()
        return jsonify(
            Game.query.order_by(Game.id.desc()).first().to_dict()
        ), 201
    except Exception as exception:
        return jsonify({ "error": str(exception) }), 400
    
# Create a release
@app.post("/releases")
def release():
    try:
        data = request.json
        release = Release(**data)
        db.session.add(release)
        db.session.commit()
        return jsonify(
            Release.query.order_by(Release.id.desc()).first().to_dict()
        ), 201
    except Exception as exception:
        return jsonify({ "error": str(exception) }), 400

# Read a platform's games
@app.get("/platforms/<int:id>/games")
def browse_platform_catalog(id):
    platform = db.session.get(Platform, id)
    if platform:
        return jsonify([ game.to_dict() for game in platform.games ]), 200
    else:
        return jsonify({ "error": "Platform not found." }), 404

# Read a game's platforms
@app.get("/games/<int:id>/platforms")
def browse_game_releases(id):
    game = db.session.get(Game, id)
    if game:
        return jsonify([ platform.to_dict() for platform in game.platforms ]), 200
    else:
        return jsonify({ "error": "Game not found." }), 404

# ~ Challenges
# 1. Write a route that moves a tenant to a different building.
# 2. Write a route that evicts a tenant from a building.
# 3. Write a route that returns a platform's name *and* games.
# 4. Write a route that returns a game's name *and* platforms.