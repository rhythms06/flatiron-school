# As the superclass of `Dog` (and theoretically, other pets)
# the class `Pet` should define data attributes and methods
# that make sense for all pets to know about.

# Note that we don't actually need to import or reference `Dog`
# at all here. The superclass-subclass relationship is created
# in the subclass, e.g. `Dog`.

class Pet:
    def __init__(self, name, owner):
        self.name = name
        self.owner = owner
        self.kingdom = "Animalia"

    def __repr__(self):
        return f"{self.name} is {self.owner}'s pet."

    def talk(self):
        print(f"*generic animal call*")

    def sleep(self):
        print(f"zzz...")
    
    def eat(self):
        print(f"om nom nom")