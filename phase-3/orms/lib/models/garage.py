from lib import CONNECTION, CURSOR

class Car:
    def __init__(self, garage, make, model):
        # We'll leave the `id` up to SQLite.
        self.id = None
        self.garage = garage
        self.make = make
        self.model = model

    def __repr__(self):
        return f"{self.make} {self.model}"

    # ~ Creating tables
    @classmethod
    def create_table(cls):
        # It's common (but not required) to pluralize the name
        # of a table mapped to a class.
        CURSOR.execute("""
            CREATE TABLE cars(
                id INTEGER PRIMARY KEY,
                garage INTEGER,
                make TEXT,
                model TEXT,
                FOREIGN KEY (garage) REFERENCES garages(id)
            );
        """)
        CONNECTION.commit()
    

    # ~ Dropping tables 
    @classmethod
    def drop_table(cls):
        CURSOR.execute("DROP TABLE IF EXISTS cars;")
        CONNECTION.commit()

    # ~ Creating a row
    def create(self):
        CURSOR.execute("INSERT INTO cars (garage, make, model) VALUES (?, ?, ?)",
                       [self.garage.id, self.make, self.model])
        CONNECTION.commit()
        self.id = CURSOR.execute("SELECT * FROM cars ORDER BY id DESC LIMIT 1").fetchone()[0]
        return self
    
    # ~ Reading all rows
    @classmethod
    def get_all(cls):
        cars = []
        rows = CURSOR.execute("SELECT * FROM cars;").fetchall()
        for row in rows:
            car = Car(garage=row[1], make=row[2], model=row[3])
            cars.append(car)
        return cars
        # or...
        return [ Car(garage=row[1], make=row[2], model=row[3]) for row in
                 CURSOR.execute("SELECT * FROM cars;").fetchall() ]
    
    # ~ Reading one row
    @classmethod
    def get_by_model(cls, model):
        row = CURSOR.execute("SELECT * FROM cars WHERE model = ?", [model]).fetchone()
        return Car(garage=row[1], make=row[2], model=row[3])

    # ~ Updating a row
    def update(self):
        CURSOR.execute("UPDATE cars SET garage = ? WHERE id = ?", [self.garage.id, self.id])
        CURSOR.execute("UPDATE cars SET make = ? WHERE id = ?", [self.make, self.id])
        CURSOR.execute("UPDATE cars SET model = ? WHERE id = ?", [self.model, self.id])
        CONNECTION.commit()
        return self
    
    def save(self):
        if self.id: self.update()
        else: self.create()
    
    # ~ Deleting a row
    def destroy(self):
        CURSOR.execute("DELETE FROM cars WHERE id = ?", [self.id])
        CONNECTION.commit()
        self.id = None

class Garage:
    def __init__(self, name):
        self.id = None
        self.name = name

    @classmethod
    def drop_table(cls):
        CURSOR.execute("DROP TABLE IF EXISTS garages;")
        CONNECTION.commit()

    @classmethod
    def create_table(cls):
        CURSOR.execute("DROP TABLE IF EXISTS garages;")
        CONNECTION.commit()
        CURSOR.execute("""
            CREATE TABLE garages(
                id INTEGER PRIMARY KEY,
                name TEXT
            );
        """)
        CONNECTION.commit()
    
    def create(self):
        CURSOR.execute("INSERT INTO garages (name) VALUES (?)",
                       [self.name])
        CONNECTION.commit()
        self.id = CURSOR.execute("SELECT * FROM garages ORDER BY id DESC LIMIT 1").fetchone()[0]
        return self

    def update(self):
        CURSOR.execute("UPDATE garages SET name = ? WHERE id = ?", [self.name, self.id])
        CONNECTION.commit()
        return self
    
    def save(self):
        if self.id: self.update()
        else: self.create()

    # ~ Reading a one-to-many relationship
    @property
    def cars(self):
        my_cars = []
        rows = CURSOR.execute("SELECT * FROM cars WHERE garage = ?", [self.id]).fetchall()
        for row in rows:
            car = Car(garage=row[1], make=row[2], model=row[3])
            my_cars.append(car)
        return my_cars
        # or...
        return [ Car(garage=row[1], make=row[2], model=row[3]) for row in
                 CURSOR.execute("SELECT * FROM cars WHERE garages = ?", [self.id]).fetchall() ]