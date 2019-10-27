
CREATE TABLE IF NOT EXISTS accounts (
    id BIGSERIAL PRIMARY KEY,
    email varchar(255),
    password varchar(60),
    userRole varchar(60)
);
