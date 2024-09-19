#!/usr/bin/env python3

# The above **shebang line** tells your computer what
# interpreter (e.g. Python) should be used to run this file.
# Shebang lines must be written at the start of scripts,
# and they take the form `#![/path/to/interpreter]`.

# This file's shebang line should make
# `./index.py` equivalent to `python index.py`.
# You may need to run `chmod +x index.py` first
# to make `index.py` directly executable.

# Class Attributes and Methods
# by Sakib Rasul

# So far, we've talked about **instances** being
# objects, i.e. bundling data attributes and methods.

# **Classes** are objects too, and can themselves
# have data attributes and methods
# that are _shared_ across instances.

from classes.pasta import Pasta

# Each instance of `Pasta` has its own
# data attributes `type`, `length`, and `origin`.
busiate = Pasta("busiate", "long", "Sicily")
fedelini = Pasta("fedelini", "long", "Naples")
mafalde = Pasta("mafalde", "long", "Naples")
anelli = Pasta("anelli", "short", "Sicily")
calamarata = Pasta("calamarata", "short", "Naples")

# The **class attribute** `all_pastas`
# contains all instances of the class in a list.
# It can be accessed from the class `Pasta`...
print(Pasta.all_pastas)
# ...or, less intuitively, any instance of `Pasta`.
print(busiate.all_pastas)

# The **class method** `number_of_pastas`
# returns the number of instances of `Pasta`.
# It can be accessed from the class `Pasta`...
print(Pasta.number_of_pastas())
# ...or, less intuitively, any instance of `Pasta`.
print(fedelini.number_of_pastas())

# The **class method** `most_prolific_origin`
# returns the most frequently observed `origin` amongst `all_pastas`.
print(f"{Pasta.most_prolific_region()} is great at making pasta.")