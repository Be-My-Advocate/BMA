
CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    email varchar(255),
    firstname varchar(255),
    lastname varchar(255),
    username varchar(255),
    password varchar(60),
    userRole varchar(60)
);
