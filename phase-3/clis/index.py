#!/usr/bin/env python3

# The **shebang** above tells our computer to use `python3`
# as the **interpreter** for this file, so that the end user
# can run this file with just `./[file].py`. Note that you
# may need to run `chmod +x [file].py` to make the file
# executable, first.

# Command Line Interfaces
# by Sakib Rasul

# A **command-line interface** (CLI) is a text-based tool
# designed to interact with data, like `cd`, `python`, and `git`.

# If your program depends on any external packages from **PyPi**,
# it's best to install those packages in a **virtual environment**,
# to keep them separate from the rest of your machine. To do so:

# 1. Create a new virtual environment with `pipenv --python [version]`.
# 2. Install dependencies with `pipenv install [package-name]`.
# 3. Enter the environment with `pipenv shell` and write Python there,
#    or run a script in the environment with `pipenv run python [file].py`.

# import regex

# It's a good idea to keep classes, functions, and "constants"
# separate from your CLI's main instructions.

from classes.pet import Pet

def greet(name):
    print(f"Hi, {name}! Who are we treating today?")
    
def treat(pet):
    print(f"""Hi, {pet.name}!
Here's a treat, specially-formulated for a
{pet.age} y.o. {pet.breed} like yourself.""")
    pet.eat()

# An important early task to complete in writing a CLI
# is check if your file is being executed directly.
# Since Python sets the **special variable** `__name__` to
# `__main__` when a module is being directly executed
# (i.e. not indirectly via an `import` statement)...
if __name__ == '__main__':
    # ...the following code will only run in that scenario,
    #    e.g. when running `python [file].py` or `./[file].py`.
    print("~ Pet Spa ~")

    # We can use the built-in function `input` to retrieve
    # input from the user. The sole argument of `input` is
    # a prompt to show the user, and the return value is
    # whatever the user types into the command line before
    # hitting the return key.
    name = input("Your name: ")
    greet(name)

    pet_name = input("Your pet's name: ")
    pet_age = input("Your pet's age: ")
    # or, using `regex` to reject non-numerical characters...
    # pet_age = "invalid string"
    # while (regex.compile(r'[\D]').search(pet_age) is not None):
    #     pet_age = input("Your pet's age: ")
    pet_breed = input("Your pet's breed: ")
    pet = Pet(pet_name, pet_age, pet_breed)
    treat(pet)
    
    print("We offer the following services:")
    with open("services.txt", mode="r", encoding="utf-8") as services:
        for service in services: print(f"- {service}")
    chosen_service = input("Choose a service: ")
    with open("appointments.txt", mode="a", encoding="utf-8") as appts:
        appts.write(
            f"{name} booked {pet_name} in for a {chosen_service}\n"
        )
    
    print("Thanks for coming! Bye now.")

    
