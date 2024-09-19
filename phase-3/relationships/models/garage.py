class Garage:
    @property
    def cars(self):
        my_cars = []
        for car in Car.all_cars:
            if car.garage == self:
                my_cars.append(car)
        return my_cars

class Car:
    all_cars = []

    def __init__(self, make, model, garage):
        self.make = make
        self.model = model
        self.garage = garage
        Car.all_cars.append(self)

    def __repr__(self):
        return f"{self.make} {self.model}"