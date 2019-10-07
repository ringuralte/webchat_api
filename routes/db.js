// TODO better try the npm mysql package this one doesn't seem to work with returns
// const mysql = require("mysql");
const mariadb = require("mariadb");

const pool = mariadb.createPool({
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST
});

pool
  .getConnection()
  .then(conn => {
    console.log("connection to database success" + conn.threadId);
  })
  .catch(err => {
    console.log("error occured " + err.message);
  });

module.exports = pool;
