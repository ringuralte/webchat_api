//TODO return something similar to initState in Store.js from client side
const express = require("express");
const db = require("../db");
const jwtAuth = require("../authentication");

const router = express.Router();

router.get("/api/getChats/:titleid", jwtAuth, (req, res) => {
  // const { title } = req.body
  // console.log(options)
  // console.log(req.query.id);
  const id = req.params.titleid;
  const queryString = "SELECT * from chats where titleid = ?";
  db.query(queryString, id)
    .then(rows => {
      // console.log(rows);
      res.status(200).json({
        rows,
        code: 200
      });
    })
    .catch(err => {
      console.log(`error ${err.message}`);
    });
});

//? maybe try another query that selects everything from the insertId and return that in response
router.post("/api/postChat", jwtAuth, (req, res) => {
  const { sender, msg, topic } = req.body;
  const queryString =
    "INSERT into chats (sender, msg, time_send, titleid, userid) values (?, ?, NOW(), (select id from topics where id=?), (select id from users where user_id=?))";
  db.query(queryString, [sender, msg, topic, sender])
    .then(result => {
      res.status(200).json({
        id: result.insertId,
        code: 200
      });
    })
    .catch(err => {
      console.log(err.message);
    });
});

module.exports = router;
