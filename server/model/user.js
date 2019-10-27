const db = require('../db/config');

const Users = {}

Users.findByEmail = (email) => {
  return db.query(
    `
      SELECT * FROM accounts
      WHERE email = $1
    `,
    [email]
  );
}

Users.addUser = (email,password, userrole) => {
  return db.oneOrNone(`
     INSERT INTO accounts(email, password, userrole)
     VALUES ($1,$2,$3)
  `, [email, password, userrole])
}

module.exports = Users
