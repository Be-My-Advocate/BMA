const db = require('../db/config');

const Users = {}

Users.findByEmail = (email) => {
  return db.query(
    `
      SELECT * FROM users
      WHERE email = $1
    `,
    [email]
  );
}

Users.addUser = (email, firstname, lastname, username, password, userrole) => {
  return db.oneOrNone(`
     INSERT INTO users(email, firstname, lastname, username, password, userrole)
     VALUES ($1,$2,$3,$4,$5,$6)
  `, [email, firstname, lastname, username, password, userrole])
}

module.exports = Users
