# Classes
# by Sakib Rasul


# In Python, definitions and statements in a `.py` file (a.k.a. **module**)
# can be shared with other modules by using the keywords `from`, `import`, and `as`.

# In this example, we want to import things from the file `modules/phone.py`.
# There are various ways we can go about doing that:
# 1. `import modules.phone` gives us access to things via `modules.phone.[thing]`
# 2. `from modules import phone` gives us access to things via `phone.[thing]`
# 3. `from modules.phone import *` gives us access to everything in `phone.py`
# 4. `from modules.phone import [thing]` gives us access to `thing` inside `phone.py`
# We can also write `... import [x] as [y]` to rename whatever we're importing.

# "Giving ourselves access to a thing" is more formally known as populating the **namespace**.
# In other words, importing a module augments our namespace with additional definitions and statements.

# When we start importing modules from a folder, Python automatically starts managing a cache by
# creating a new folder within that folder called `__pycache__`. This is a completely automated process
# that speeds up the task of loading modules.

# Import a class from another module.
from modules.phone import Phone

# Create a new instance of the class `Phone`, i.e. call the `__init__` method in `Phone`.
iPhone = Phone("Apple", "iPhone", "16 Pro", "Play Store")

# Convert our instance into a string, i.e. call the `__repr__` method in `Phone`.
print(iPhone)

# Access an instance data attribute.
print(iPhone.store)

# Modify an instance data attribute.
iPhone.store = "App Store"

# Access an instance data attribute.
print(iPhone.store)

# We can modify instance properties just like we modify data attributes.
# The difference is that modifying a property invokes a custom setter method,
# e.g. `@remaining_battery.setter remaining_battery()` in `Phone`.
iPhone.remaining_battery = 92

# We can access instance properties just like we access data attributes.
# The difference is that accessing a property invokes a custom getter method,
# e.g. `@property remaining_battery()` in `Phone`.
print(iPhone.remaining_battery)

# Call an instance method.
iPhone.download("FiLR")

# Downloading an application successfully should result in a change in battery.
print(iPhone.remaining_battery)