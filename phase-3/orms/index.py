# Object-Relational Mappings
# by Sakib Rasul

# An **object-relational mapping** is a mapping 
# of _classes, instances, and data attributes_
# in an object-oriented programming language like Python
# to _tables, rows, and columns_
# in a database management system like SQLite.

from lib.models.garage import Garage, Car
from lib.models.hotel import Hotel, Guest

# ~ One-to-Many Relationships
# A garage can have many cars,
# but a car can be parked in just one garage.

Garage.drop_table()
Garage.create_table()

home = Garage(name="Home")
home.save()

work = Garage(name="Work")
work.save()

Car.drop_table()
Car.create_table()

elantra = Car(garage=home, make="Hyundai", model="Elantra")
elantra.save()
elantra.model = "Sonata"
elantra.save()

x5 = Car(garage=home, make="BMW", model="X5")
x5.save()

mustang = Car(garage=work, make="Ford", model="Mustang")
mustang.save()

print()
print("~~MUSTANG~~")
print(Car.get_by_model("Mustang"))
mustang.destroy()

print()
print("~~CARS~~")
print(Car.get_all())
print()

print()
print("~~HOME~~")
for car in home.cars: print(car)

print()
print("~~WORK~~")
for car in work.cars: print(car)
print()

# ~ Many-to-Many Relationships
# A hotel can have bookings with many guests,
# and a traveler can have bookings with many hotels.

# cardiff = Hotel("Marriott", "Cardiff")
# new_yorker = Hotel("Wyndham", "New Yorker")

# sakib = Guest("Sakib")
# hannah = Guest("Hannah")

# sakib.book(cardiff, 3)
# hannah.book(cardiff, 5)
# sakib.book(new_yorker, 2)
# hannah.book(new_yorker, 6)

# print("~~CARDIFF~~")
# for booking in cardiff.bookings: print(booking)
# print()
# print("~~NEW YORKER~~")
# for booking in new_yorker.bookings: print(booking)

# print()
# print("~~SAKIB~~")
# for booking in sakib.bookings: print(booking)
# print()
# print("~~HANNAH~~")
# for booking in hannah.bookings: print(booking)
# print()