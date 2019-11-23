// TODO better try the npm mysql package this one doesn't seem to work with returns
// const mysql = require("mysql");
// const mariadb = require("mariadb");
//
// const pool = mariadb.createPool({
//   user: process.env.DB_USER,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST
// });
//
// pool
//   .getConnection()
//   .then(conn => {
//     console.log("connection to database success" + conn.threadId);
//   })
//   .catch(err => {
//     console.log("error occured " + err.message);
//   });
//
// module.exports = pool;

const {Pool} = require("pg");

//create user table
const createTableUsers = () => {
  const queryString = `CREATE TABLE IF NOT EXISTS
  users(
  id serial PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  password VARCHAR(512) NOT NULL,
  UNIQUE(user_id))`;
  pool
    .query(queryString)
    .then(() => {
      console.log('user table created');
    })
    .catch(err => {
      console.log('createtableusers error ' + err);
    });
};

//create topic table
const createTableTopics = () => {
  const queryString = `CREATE TABLE IF NOT EXISTS
  topics(
  id serial PRIMARY KEY,
  title VARCHAR(50) NOT NULL,
  UNIQUE(title))`;
  pool
    .query(queryString)
    .then(() => {
      console.log('topic table created');
    })
    .catch(err => {
      console.log('createtabletopics error ' + err);
    });
};

//create chat table
const createTableChats = () => {
  const queryString = `CREATE TABLE IF NOT EXISTS
  chats(
  id serial PRIMARY KEY,
  sender VARCHAR(255) NOT NULL,
  msg TEXT NOT NULL,
  time_send TIMESTAMP,
  title VARCHAR(50),
  FOREIGN KEY (title) REFERENCES topics (title))`;
  pool.query(queryString).then(() => {
    console.log('chat table created');
  }).catch(err => {
    console.log('createtablechats error ' + err)
  })
}

// const createTopicItems = () => {
//   const queryString = `INSERT INTO topics (title) VALUES ('general'),('dota2'),('csgo'),('wow')`
//   pool.query(queryString).then(() => {
//     console.log('topic items created')
//   }).catch(err => {
//     console.log('createtopicitems error ' + err)
//   })
// }

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
pool
  .connect()
  .then(() => {
    console.log("connection to database success");
  })
  .then(createTableUsers).then(createTableTopics).then(createTableChats)
  .catch(err => {
    console.log("error occured " + err.message);
  });

module.exports = pool;
