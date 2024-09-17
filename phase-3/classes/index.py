# Classes
# by Sakib Rasul


# In Python, definitions and statements in a `.py` file can be shared with other files
# when we treat that file as a **module**.

# In this example, we want to treat `modules/phone.py` as a module.
# There are various ways we can go about doing that:
# 1. `import modules.phone` gives us access to things via `modules.phone.[thing]`
# 2. `from modules import phone` gives us access to things via `phone.[thing]`
# 3. `from modules.phone import *` gives us access to everything in `phone.py`
# 4. `from modules.phone import [thing]` gives us access to `thing` inside `phone.py`
# We can also write `... import [x] as [y]` to rename whatever we're importing.

# "Giving ourselves access to a thing" is more formally known as populating the **namespace**.
# In other words, importing a module augments our namespace with additional definitions and statements.

# When we start treating a file as a module, i.e. importing things from it into other files,
# Python automatically starts managing a cache of that module, in a folder named `__pycache__`.
# This is a completely automated process that speeds up the task of loading a module.

# Import a class.
from modules.phone import Phone

# Call `__init__`.
iPhone = Phone("Apple", "iPhone", "16 Pro", "Play Store")

# Call `__repr__`.
print(iPhone)

# Access a data attribute.
print(iPhone.store)

# Modify a data attribute.
iPhone.store = "App Store"

# Access a data attribute.
print(iPhone.store)

# Set a property.
iPhone.remaining_battery = 11

# Get a property.
print(iPhone.remaining_battery)

# Call an instance method.
iPhone.download("FiLR")

# Get a property.
print(iPhone.remaining_battery)