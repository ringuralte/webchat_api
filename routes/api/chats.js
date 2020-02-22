//TODO return something similar to initState in Store.js from client side
const express = require("express");
const db = require("../db");
const jwtAuth = require("../authentication");

const router = express.Router();

router.get("/api/getChats/:title", jwtAuth, (req, res) => {
  const id = JSON.parse(req.params.title);
  const query = {
    text: "SELECT * FROM chats WHERE title=$1",
    values: [id]
  };
  db.query(query)
    .then(result => {
      res.status(200).json({
        chats: result.rows,
        code: 200
      });
    })
    .catch(err => {
      console.log(`error ${err.message}`);
    });
});

//? maybe try another query that selects everything from the insertId and return that in response
router.post("/api/postChat", jwtAuth, (req, res) => {
  const { msg, topic } = req.body;
  const sender = req.cookies.user;
  const query = {
    text:
      "INSERT into chats (sender, msg, time_send, title) values ($1, $2, NOW(), (select title from topics where title=$3)) RETURNING id",
    values: [sender, msg, JSON.parse(topic)]
  };
  if (msg.length < 1000) {
    db.query(query)
      .then(result => {
        const id = Object.keys(result.rows).map(key => {
          return result.rows[key].id;
        });
        res.status(200).json({
          id,
          code: 200
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  } else {
    res.status(400).json({
      code: 400,
      message: "Message too long < 1000 you are at "
    });
  }
});

module.exports = router;
