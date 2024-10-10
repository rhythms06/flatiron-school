from config import app, db
from models import Building, Tenant, Platform, Game, Release
# `faker` is a package that generates fake data.
# It can be really useful in seeding a database!
# Check out everything it can fake at faker.readthedocs.io/en/stable/providers.html.
from faker import Faker
# This is just for readability.
fake = Faker()
# The Python module `random` can also come in handy with random numbers!
import random

# This statement ensures that we only seed the database
# when `seed.py` is run directly (not via an import).
if __name__ == "__main__":
    # This statement is similar to running `flask shell`
    # on the command line; it lets us interact with
    # our SQLAlchemy ORM without writing a route.
    with app.app_context():

        print("Clearing tables...")
        # The following line is equivalent to `DELETE FROM buildings`.
        Building.query.delete()
        # ...`DELETE FROM tenants`.
        Tenant.query.delete()
        # ...you get the idea.
        Platform.query.delete()
        Game.query.delete()
        Release.query.delete()
        db.session.commit()

        print("Adding buildings...")
        for _ in range(5):
            # To fake something, just use `Faker().[thing]`!
            db.session.add(Building(address=fake.address()))
        db.session.commit()

        print("Adding tenants...")
        for _ in range(5):
            # We can use `randint(a, b)` to generate an integer b/w a and b, inclusive.
            db.session.add(Tenant(name=fake.name(), building_id = random.randint(1, 5)))
        db.session.commit()

        print("Adding platforms...")
        xbox_one = Platform(name="Xbox One")
        playstation_4 = Platform(name="PlayStation 4")
        # `db.session.add_all([instance_1, ...])` lets us
        # add multiple rows in one function call! 
        db.session.add_all([xbox_one, playstation_4])
        db.session.commit()

        print("Adding games...")
        sims = Game(name="The Sims 4")
        forza = Game(name="Forza Horizon 4")
        db.session.add_all([sims, forza])
        db.session.commit()

        print("Adding releases...")
        db.session.add(Release(platform_id=xbox_one.id, game_id=sims.id))
        db.session.add(Release(platform_id=playstation_4.id, game_id=sims.id))
        db.session.add(Release(platform_id=xbox_one.id, game_id=forza.id))
        db.session.commit()

        print("Done.")
        


