//TODO return something similar to initState in Store.js from client side
const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/api/getChats", (req, res) => {
  // const { title } = req.body
  const queryString = "SELECT * from chats where titleid='4'";
  db.query(queryString)
    .then(rows => {
      // console.log(rows);
      res.status(200).json({
        rows
      });
    })
    .catch(err => {
      console.log(`error ${err.message}`);
    });
});

//? maybe try another query that selects everything from the insertId and return that in response
router.post("/api/postChat", (req, res) => {
  const { sender, msg } = req.body;
  const queryString =
    "INSERT into chats (sender, msg, time_send, titleid, userid) values (?, ?, NOW(), (select id from topics where id=4), (select id from users where user_id=?))";
  db.query(queryString, [sender, msg, sender])
    .then(result => {
      console.log(result.insertId);
      console.log(result.affectedRows);
      res.status(200).json({
        id: result.insertId
      });
    })
    .catch(err => {
      console.log(err.message);
    });
});

module.exports = router;
