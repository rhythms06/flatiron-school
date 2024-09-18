# Inheritance
# by Sakib Rasul

# Classes can **inherit** data attributes and methods
# from other classes. If class A inherits from class B,
# we might say that A is a **subclass** of B,
# and that B is the **superclass** of A.

# Here, `Dog` is a subclass of `Pet`.
# This means that all instances of `Dog` inherit data and code
# defined in `Pet`, as well as any data and code defined in `Dog`.
# In plain English, all dogs are pets, but not all pets are dogs!
# Let's see that in action.

# Import the class `Dog` from "classes/dog.py"
from classes.dog import Dog

# Create a new instance of the class `Dog`
# i.e. call `__init__` in `Dog`
# which is inherited from `Pet` and extended in `Dog`.
benji = Dog("Benji", "Sakib")

# Print the new instance to console
# i.e. call `__repr__` in `Dog`
# which is inherited from `Pet` and overwritten in `Dog`.
print(benji)

# Print some data attributes...
# ...inherited from `Pet`.
print(benji.kingdom)
# ...defined only in `Dog`.
print(benji.species)

# Call some instance methods...
# ...inherited from `Pet` and overwritten in `Dog`.
benji.talk()
# ...inherited from `Pet`.
benji.sleep()
# ...inherited from `Pet` and extended in `Dog`.
benji.eat()
# ...defined only in `Dog`.
benji.scratch()