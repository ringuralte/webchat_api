const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/api/topics", (req, res) => {
  // const { title } = req.body
  const queryString = "SELECT title,id from topics";
  db.query(queryString)
    .then(rows => {
      res.status(200).json({
        rows
      });
    })
    .catch(err => {
      console.log(`error ${err.message}`);
    });
});

module.exports = router;
