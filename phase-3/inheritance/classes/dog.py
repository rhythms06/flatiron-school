# To make `Dog` a subclass of `Pet`,
# we import `Pet`...
from classes.pet import Pet

# ...and add `(Pet)` here,
# ...or more generally, `class [Subclass]([Superclass]): ...`.
class Dog(Pet):

# As a subclass of `Pet`, the class `Dog`
# should define data attributes and methods
# that make sense for all dogs to know about,
# **inherit** data attributes from `Pet`,
# as well as **override** by redefining,
#            **extend** with `super()`,
#  or simply **inherit** by omitting
# methods defined in `Pet`.

    # We can **override** the `__init__` method in `Pet`
    # by simply redefining `__init__` in `Dog`.
    def __init__(self, name:str="Benji", owner:str="Sakib"):
        # We can write `super()` (think "superclass")
        # to access things in `Pet`.
        # Note that we don't write `Pet()`,
        # because that would create a whole new pet.

        # Call the `__init__` method in `Pet`...
        super().__init__(name, owner)
        # ...before doing some other things that
        #    should only be done when creating dogs.
        self.species = "Canis familiaris"
        self.common_name = "dog"
    
    # Override the `__repr__` method of `Pet`.
    def __repr__(self):
        return f"{self.name} is {self.owner}'s {self.common_name}."
    
    # Override the `talk` method of `Pet`.
    def talk(self):
        print(f"Woof!")

    # **Extend** `eat` in `Pet`...
    def eat(self):
        # ...by doing whatever pets do when they eat...
        super().eat()
        # ...**and** doing things that dogs do when they eat.
        self.talk()

    # We can also define methods that belong only to
    # the subclass with plain ol' method notation.

    # Pets can't scratch themselves, but dogs can.
    def scratch(self):
        print("Tch, tch, tch!")
    
    
    
