const express = require("express");
const db = require("../db");
const jwtAuth = require("../authentication")

const router = express.Router();

router.get("/api/topics", (req, res) => {
  const query = {
    text: "SELECT id,title FROM topics"
  };
  db.query(query)
    .then(result => {
      res.status(200).json({
        code: 200,
        topics: result.rows
      });
    })
    .catch(err => {
      console.log(`error ${err.message}`);
    });
});

module.exports = router;
