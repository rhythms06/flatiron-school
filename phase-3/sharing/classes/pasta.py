class Pasta:
    # To create a **class attribute**, simply create
    # a variable inside of a class.

    # The **class attribute** `all_pastas` is shared
    # amongst all instances of `Pasta`.
    all_pastas = []

    # By convention, we can use `ALL_CAPS` to name
    # class attributes that are meant to be constant.
    # Note that this doesn't actually enforce immutability!
    LENGTHS = ["short", "medium", "long"]

    def __init__(self, type, length, origin):
        # To create an instance attribute,
        # write `self.[name_of_data_attribute]`.
        self.type = type
        # To access a class attribute,
        # write `[ClassName].[data_attribute_name]`, or,
        # less commonly, `[instance_name].[data_attribute_name]`.
        if length in Pasta.LENGTHS:
            self.length = length
        else:
            raise ValueError("Malformed length given.")
        self.origin = origin
        Pasta.all_pastas.append(self)

    def __repr__(self) -> str:
        return f"{self.type}"

    # To create a **class method**, prepend a method definition
    # with the decorator `@classmethod`.
    @classmethod
    # Instead of being a reference to an instance like `self`,
    # the first argument of a class method is a reference to
    # the class itself. We use the name `cls` by convention.
    def number_of_pastas(cls):
        """Returns the number of instances of `Pasta`."""
        return len(cls.all_pastas)
    
    @classmethod
    def most_prolific_region(cls):
        """Returns the most frequently observed
           `origin` amongst all instances of `Pasta`."""
        origin_frequencies = {}
        for pasta in cls.all_pastas:
            if pasta.origin not in origin_frequencies:
                origin_frequencies[pasta.origin] = 1
            else:
                origin_frequencies[pasta.origin] += 1
        return max(origin_frequencies, key=origin_frequencies.get)