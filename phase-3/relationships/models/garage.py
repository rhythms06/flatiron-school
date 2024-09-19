# To implement a one-to-many relationship between `Garage` and `Car`,
# assign each instance of `Car` to one instance of class `Garage`,
# and give each instance of `Garage` access to the cars it owns.

class Car:
    # To let each instance of `Garage` know about the cars it owns,
    # we can manage a list of `all_cars` as a class attribute of `Car`.
    all_cars = []

    def __init__(self, make, model, garage):
        self.make = make
        self.model = model
        # Assign one garage to the car upon initialization.
        self.garage = garage
        Car.all_cars.append(self)

    # If a garage tries to access its cars, it may invoke this method!
    def __repr__(self):
        return f"{self.make} {self.model}"

class Garage:
    # This property gives each garage access to the cars it owns.
    @property
    # `self` refers to the garage we're trying read `cars` from.
    def cars(self):
        # The general idea here is to iterate over `Car.all_cars`
        # and return a subset associated with `self`.

        # We could do that with a `for` statement...
        my_cars = []
        # (Iterate over all instances of `Car`...)
        for car in Car.all_cars:
            # (...and if an instance of `Car` is in this garage...)
            if car.garage == self:
                # (...then append that instance to our running list.)
                my_cars.append(car)
        return my_cars
    
        # ...or we could write a **list comprehension**,
        #    written as `[ item for item in list if condition ]`.
        # (Return every `car` in `all_cars` where `car.garage == self`.)
        return [ car for car in Car.all_cars if car.garage == self ]