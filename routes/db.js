//database stuffs using postgresql
const { Pool } = require("pg");

//create user table
const createTableUsers = () => {
  const queryString = `CREATE TABLE IF NOT EXISTS
  users(
  id serial PRIMARY KEY,
  user_id VARCHAR(25) NOT NULL,
  password VARCHAR(512) NOT NULL,
  UNIQUE(user_id))`;
  pool
    .query(queryString)
    .then(() => {
      console.log("user table created");
    })
    .catch(err => {
      console.log("createtableusers error " + err);
    });
};

//create topic table
//here user_id is not unique cause one person can create multiple groups
const createTableTopicsAndChats = () => {
  const queryString = `CREATE TABLE IF NOT EXISTS
  topics(
  id serial PRIMARY KEY,
  title VARCHAR(20) NOT NULL,
  user_id VARCHAR(25) NOT NULL,
  UNIQUE(title))`;
  pool
    .query(queryString)
    .then(res => {
      console.log("topic table created");
    })
    //adding chat table here cause it causes error due to foreign key dependency
    .then(createTableChats)
    .catch(err => {
      console.log("createtabletopics error " + err);
    });
};

//create chat table
const createTableChats = () => {
  const queryString = `CREATE TABLE IF NOT EXISTS
  chats(
  id serial PRIMARY KEY,
  sender VARCHAR(25) NOT NULL,
  msg TEXT NOT NULL,
  time_send TIMESTAMP,
  title VARCHAR(20),
  FOREIGN KEY (title) REFERENCES topics (title))`;
  pool
    .query(queryString)
    .then(() => {
      console.log("chat table created");
    })
    .catch(err => {
      console.log("createtablechats error " + err);
    });
};

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
pool
  .connect()
  .then(() => {
    console.log("connection to database success");
  })
  .then(createTableUsers)
  .then(createTableTopicsAndChats)
  .catch(err => {
    console.log("error occured " + err.message);
  });

module.exports = pool;
