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

module.exports = router;
