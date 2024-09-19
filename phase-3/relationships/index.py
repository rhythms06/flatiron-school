# Relationships
# by Sakib Rasul

from models.garage import Garage, Car
from models.hotel import Hotel, Guest

# ~ One-to-Many Relationships
# A garage can have many cars,
# but a car can be parked in just one garage.
home = Garage()
work = Garage()
elantra = Car("Hyundai", "Elantra", home)
x5 = Car("BMW", "X5", home)
mustang = Car("Ford", "Mustang", work)

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
cardiff = Hotel("Marriott", "Cardiff")
new_yorker = Hotel("Wyndham", "New Yorker")

sakib = Guest("Sakib")
hannah = Guest("Hannah")

sakib.book(cardiff, 3)
hannah.book(cardiff, 5)
sakib.book(new_yorker, 2)
hannah.book(new_yorker, 6)

print("~~CARDIFF~~")
for booking in cardiff.bookings: print(booking)
print()
print("~~NEW YORKER~~")
for booking in new_yorker.bookings: print(booking)

print()
print("~~SAKIB~~")
for booking in sakib.bookings: print(booking)
print()
print("~~HANNAH~~")
for booking in hannah.bookings: print(booking)
print()