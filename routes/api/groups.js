const express = require("express");
const db = require("../db");
const jwtAuth = require("../authentication");

const router = express.Router();

router.post("/api/createGroup", jwtAuth, (req, res) => {
  const { groupName } = req.body;
  const user = req.cookies.user;
  const query = {
    text: "INSERT into topics (title, user_id) values ($1, $2)",
    values: [groupName, user]
  };
  db.query(query).then(result => {
    res.status(200);
  });
});

module.exports = router;
