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

    def __init__(self, name, owner):
        super().__init__(name, owner)
        self.species = "Canis familiaris"
        self.common_name = "dog"
    
    def __repr__(self):
        return f"{self.name} is {self.owner}'s {self.common_name}."
    
    def talk(self):
        print(f"Woof!")

    def eat(self):
        super().eat()
        self.talk()

    def scratch(self):
        print("Tch, tch, tch!")
    
    
    
