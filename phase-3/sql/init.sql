-- An Introduction to SQL
-- by Sakib Rasul

-- SQL, or **Structured Query Language**, was developed
-- by IBM researchers Donald D. Chamberlin and Raymond F. Boyce in 1974
-- as a way of managing information stored in tables (i.e. a **database**)
-- that can relate to one another (i.e. a **relational** database).

-- **SQLite** is an immensely popular **database engine**, i.e. way
-- of executing queries and storing tables in a relational database.
-- You can verify that you have SQLite installed with `sqlite3 --version`,
-- or run `brew install sqlite` or `sudo apt install sqlite3` if you don't.
-- Then, run `sqlite3 [database]` to execute new queries on the command line
-- (Hint: Type `.exit` to stop executing queries),
-- or `sqlite3 [database] < [script].sql` to execute pre-written queries,
-- where [database] is an existing or non-existing file recognized by SQLite
-- as a database, often with an extension of `.db`.

-- In this example, a database `main.db` and a SQL script `init.sql`
-- (the file you're reading!) have already been instantiated.
-- Try running `sqlite3 main.db` to execute queries on the command line, 
-- or `sqlite3 main.db < init.sql` to execute the queries written below
-- (in either case, on the database stored in `main.db`).

-- To access a SQLite database like `main.db`, you'll need a SQLite
-- database viewer, such as SQLite or SQLite Viewer for Visual Studio Code,
-- or a more full-fledged standalone application like DB Browser for SQLite.

-- A SQL script (e.g. this file) is a set of statements used to create,
-- read, update, or delete rows, columns, and values in a database.
-- The general syntax of a statement is `COMMAND [arguments];`.

-- We can use the `DROP TABLE` command to remove a table from the database.
-- The optional `IF EXISTS` clause suppresses the error that would normally
-- result from removing a table that doesn't exist.
DROP TABLE IF EXISTS garage;
DROP TABLE IF EXISTS car;
DROP TABLE IF EXISTS hotel;
DROP TABLE IF EXISTS booking;
DROP TABLE IF EXISTS guest;

-- We can use the `CREATE TABLE` command to create a new table
-- and populate it with **columns**, i.e. data attributes, that each have
-- a name and **type affinity**, or recommended type, of
-- `TEXT`, `NUMERIC`, `INTEGER`, `REAL`, or `BLOB`.
-- Note: In SQLite, any column can techinically store any combination of
--       `NULL`, `INTEGER`, `REAL`, `TEXT`, or `BLOB` values.
CREATE TABLE garage(
    -- We can write `PRIMARY KEY` to note that (at most) one column
    -- should contain unique values. By convention, we'll give every
    -- table in our database a primary key `id` of type affinity `INTEGER`.
    id INTEGER PRIMARY KEY,
    -- We can use the keyword `DEFAULT` to provide a default value for
    -- a column. Here, `unixepoch()` is used to populate new cells in
    -- `created_at` with the number of seconds elapsed since 1970.
    created_at INTEGER DEFAULT (unixepoch()),
    -- We can use the keywords `NOT NULL` to specify that a column
    -- shouldn't contain any `NULL` (i.e. empty) values.
    name TEXT NOT NULL,
    -- A column with a type affinity of `REAL` is meant to store
    -- floating-point numbers like `60.32`.
    hourly_rate REAL DEFAULT 0.00,
    -- A column with a type affinity of `NUMERIC` is meant to store
    -- integers and floating-point numbers.
    max_cars NUMERIC DEFAULT 1,
    -- Since there is no notion of "booleans" in SQLite, we often use
    -- the integers 0 and 1 to denote the values FALSE and TRUE.
    is_open INTEGER
);

-- ~ Foreign Keys

PRAGMA foreign_keys = ON;

CREATE TABLE car(
    id INTEGER PRIMARY KEY,
    garage_id INTEGER,
    created_at INTEGER DEFAULT (unixepoch()),
    make TEXT,
    FOREIGN KEY (garage_id) REFERENCES garage(id)
);

-- ~ ALTER TABLE

ALTER TABLE car ADD COLUMN model TEXT;


-- ~ Seeding

INSERT INTO garage(name, hourly_rate, max_cars, is_open) VALUES(
    "Home", 0.00, 1, 1
);
INSERT INTO garage(name, hourly_rate, max_cars, is_open) VALUES(
    "Work", 10.00, 100, 1
);
INSERT INTO car(garage_id, make, model) VALUES (2, "Hyundai", "Elantra");
INSERT INTO car(garage_id, make, model) VALUES (2, "BMW", "X5");
INSERT INTO car(make, model) VALUES ("Ford", "Mustang");

-- ~ UPDATE and WHERE

UPDATE garage SET is_open = 0 WHERE id = 1;

-- ~ SELECT, WHERE, ORDER BY, ASC, DESC, LIMIT

SELECT "~ Garages ~";
SELECT name FROM garage;
SELECT "~ Just one car, please ~";
SELECT * FROM car LIMIT 1;
SELECT "~ Open Garages ~";
SELECT name FROM garage WHERE is_open = 1;
SELECT "~ Garages by Rate ~";
SELECT name, hourly_rate FROM garage ORDER BY hourly_rate;
SELECT "~ Cars by Make ~";
SELECT make, model FROM car ORDER BY make DESC;

-- ~ INNER JOIN
SELECT "~ Inner Join ~";
SELECT garage.name, car.make, car.model 
FROM garage
JOIN car ON garage.id = car.garage_id;

-- ~ LEFT JOIN
SELECT "~ Left Join ~";
SELECT garage.name, car.make, car.model 
FROM garage
LEFT JOIN car ON garage.id = car.garage_id;

-- ~ RIGHT JOIN
SELECT "~ Right Join ~";
SELECT garage.name, car.make, car.model 
FROM garage
RIGHT JOIN car ON garage.id = car.garage_id;

-- ~ FULL OUTER JOIN
SELECT "~ Full Outer Join ~";
SELECT garage.name, car.make, car.model 
FROM garage
FULL OUTER JOIN car ON garage.id = car.garage_id;

-- ~ DELETE and WHERE
DELETE FROM garage WHERE max_cars <= 0;

-- ~ Aggregate Functions

SELECT "~ Minimum Rate ~";
SELECT MIN(hourly_rate) FROM garage;
SELECT "~ Average Rate ~";
SELECT AVG(hourly_rate) FROM garage;
SELECT "~ Maximum Rate ~";
SELECT MAX(hourly_rate) FROM garage;
SELECT "~ Total Capacity ~";
SELECT SUM(max_cars) FROM garage;
SELECT "~ Number of Cars ~";
SELECT COUNT(*) FROM car;

-- ~ Join Tables

CREATE TABLE hotel(
    id INTEGER PRIMARY KEY,
    chain TEXT,
    name TEXT
);

CREATE TABLE guest(
    id INTEGER PRIMARY KEY,
    name TEXT
);

CREATE TABLE booking(
    id INTEGER PRIMARY KEY,
    hotel_id INTEGER,
    guest_id INTEGER,
    nights INTEGER,
    FOREIGN KEY (hotel_id) REFERENCES hotel(id),
    FOREIGN KEY (guest_id) REFERENCES guest(id)
);

INSERT INTO hotel(chain, name) VALUES ("Marriott", "Cardiff");
INSERT INTO hotel(chain, name) VALUES ("Wyndham", "New Yorker");
INSERT INTO guest(name) VALUES ("Sakib");
INSERT INTO guest(name) VALUES ("Hannah");
INSERT INTO booking(hotel_id, guest_id, nights) VALUES (1, 1, 1);
INSERT INTO booking(hotel_id, guest_id, nights) VALUES (2, 1, 2);
INSERT INTO booking(hotel_id, guest_id, nights) VALUES (1, 2, 3);
INSERT INTO booking(hotel_id, guest_id, nights) VALUES (2, 2, 4);

SELECT "~ Bookings ~";
SELECT hotel.chain, hotel.name, guest.name, booking.nights
FROM booking
JOIN hotel ON booking.hotel_id = hotel.id
JOIN guest ON booking.guest_id = guest.id