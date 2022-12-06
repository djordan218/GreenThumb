DROP DATABASE green_thumb;
CREATE DATABASE green_thumb;
\c green_thumb;

DROP TABLE saved_crops;
DROP TABLE crops;
DROP TABLE users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(30) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  zone INTEGER NOT NULL CHECK (zone BETWEEN 1 AND 13),
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE crops (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description VARCHAR(2000),
  days_to_germ INTEGER NOT NULL,
  days_to_harvest INTEGER NOT NULL,
  when_to_harvest VARCHAR(2000),
  img TEXT,
  user_id INTEGER
   REFERENCES users ON DELETE CASCADE
);

CREATE TABLE saved_crops (
  user_id INTEGER
    REFERENCES users ON DELETE CASCADE,
  crop_id INTEGER
    REFERENCES crops ON DELETE CASCADE,
  PRIMARY KEY (user_id, crop_id)
);
