from lib import CONNECTION, CURSOR

class Hotel:
    def __init__(self, chain, name):
        self.chain = chain
        self.name = name

    def __repr__(self):
        return f"{self.name} {self.chain} Hotel"

    @property
    def bookings(self):
        return [booking for booking in Booking.all_bookings if booking.hotel == self]

class Guest:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return self.name

    def book(self, hotel, nights):
        return Booking(self, hotel, nights)

    @property
    def bookings(self):
        return [booking for booking in Booking.all_bookings if booking.guest == self]

class Booking:
    all_bookings = []

    def __init__(self, guest, hotel, nights):
        self.guest = guest
        self.hotel = hotel
        self.nights = nights
        Booking.all_bookings.append(self)

    def __repr__(self):
        return f"{self.guest} is staying at {self.hotel} for {self.nights} nights."