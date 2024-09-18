# Classes
# by Sakib Rasul

# A **class** (written in `PascalCase`) is a way of bundling data and functionality
# into a new **type** of object. This process is known as **object-oriented programming**.

# Here, we're creating a class called `Phone`, so that we can create new objects of type `Phone`.
# When we do, we'll call those new objects **instances** of the class `Phone`.
# To get started, just write `class [Name]: pass`. What you replace `pass` with is up to you... 
class Phone:
    # ...but at the very least, it's useful to define one or more
    # **special methods** (a.k.a "magic methods" or "dunder methods")
    # that convey to Python important things about your class.

    # One such "special" method is `__init__`, which lets us define what happens
    # when a new instance of a class gets created.
    # (If we don't define `__init__`, then new instances are just empty objects.)
    # Here, we print to console and create a few **instance attribute references**
    # whenever a new `Phone` is instantiated.
    # In doing so, we use the argument `self` to refer to the instance being created.
    def __init__(self,
                 manufacturer:str="Apple",
                 family:str="iPhone",
                 model:str="14 Pro",
                 store:str="App Store"):
        print(f"Thank you for purchasing an {family} {model}!")
        # An **attribute reference** associates an object with
        # either some bit of data or a **method**.
        # Here, we associate instances of `Phone` with four **data attributes**.
        self.manufacturer = manufacturer
        self.family = family
        self.model = model
        self.store = store
    
    # Another such "special" method is __repr__, which lets us define
    # the "official" string representation of an instance.
    # We can use the argument `self` in __repr__ to refer to the instance being represented as a string.
    def __repr__(self) -> str:
        return f"Hi, I'm an {self.family} {self.model}, brought to you by {self.manufacturer}."

    # The other kind of **attribute reference** is a **method**, or a function that belongs to an object.
    # Whereas data attribute references are defined in `__init__`, methods are defined "out in the open."
    # Here, we define the method `download` for instances of the class `Phone`.
    # We can use the argument `self` in a method to refer to the instance calling it.
    def download(self, application):
        # `hasattr([object], [name])` is a built-in function that returns True
        # if [object] has an attribute called [name].
        # Here, we're checking if an instance of `Phone` has the attribute `_remaining_battery`. 
        if hasattr(self, "_remaining_battery"):
            # Prepending a variable name with a single underscore lets us communicate to
            # other developers that that variable is not meant for public use.
            # We're doing that here because we want to expose `remaining_battery` as a **property**
            # that communicates a phone's remaining battery in a user-friendly way, while keeping the
            # actual percentage value "private" in the data attribute `_remaining_battery`.
            if self._remaining_battery > 10:
                self._remaining_battery -= 10
                print(f"Cool, downloading {application} from the {self.store}.")
            else:
                # We can raise errors in our methods by writing `raise [Name]Error([description])`.
                raise ValueError("You don't have enough battery left.")
        else:
            raise AttributeError("I'm not sure if you have enough power to download that app.")
    
    # A **property** is a data attribute
    # that we can control the **getter**, **setter**, **deleter**, and **docstring** of.
    # There are two ways we can create properties:
    # 1. Write `x = property(getter, setter, deleter, docstring)` to create a property x.
    # 2. Use the `@property`, `@[x].setter`, and `@[x].deleter` **decorators** to define
    #    the getter and docstring, setter, and deleter of `[x]`, respectively.
    # **Decorators** are known as **syntactic sugar** (i.e. shorthands)
    # for functions that return other functions.

    # The `@property` decorator lets us define the getter of a data attribute,
    # i.e. what happens when one tries to access that attribute in an instance,
    # i.e. what happens when one writes `[instance].[data_attribute]`.

    # When someone writes `[instance].remaining_battery` outside of this class...
    @property
    def remaining_battery(self):
        # (Optionally, we can provide a docstring before the getter.)
        """Display the current battery."""
        # ...return the following string.
        return f"You have {self._remaining_battery}% remaining."
    
    # The `@[x].setter` decorator lets us define the setter of a data attribute [x],
    # i.e. what happens when one tries to assign a value to that attribute,
    # i.e. what happens when one writes `[instance].[data_atttribute] = [value]`.
    # The second parameter of a setter is the new intended value, e.g. `[value]` above.

    # When someone writes `[instance].remaining_battery = [new_percentage]`...
    @remaining_battery.setter
    def remaining_battery(self, percentage):
        # ...print this string...
        print(f"Changing the battery level...")
        # ...and change the data attribute `_remaining_battery`
        #    if given an integer between 1 and 100,
        if type(percentage) == int and 1 <= percentage <= 100:
            self._remaining_battery = percentage
        #    or an error, otherwise.
        else:
            raise TypeError("Expected an integer between 1 and 100.")
        
