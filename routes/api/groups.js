const express = require("express");
const db = require("../db");
const jwtAuth = require("../authentication");

const router = express.Router();

router.post("/api/createGroup", jwtAuth, (req, res) => {
  const { groupName } = req.body;
  const user = req.cookies.user;
  const query = {
    text: "INSERT into topics (title, user_id) values ($1, $2) RETURNING id",
    values: [groupName, user]
  };
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
    .catch(error => {
      // console.log(error.message);
      // console.log(error.code);
      res.status(400).json({
        code: 23505,
        message: "Group already exist"
      });
    });
});

router.delete("/api/deleteGroup", jwtAuth, (req, res) => {
  const { title } = req.body;
  const deleteRequestName = req.cookies.user;

  const getCreatorQuery = {
    text: "SELECT user_id from topics where title=$1",
    values: [title]
  };
  const chatQuery = {
    text: "DELETE from chats where title=$1",
    values: [title]
  };
  const titleQuery = {
    text: "DELETE from topics where title=$1",
    values: [title]
  };

  db.query(getCreatorQuery)
    .then(result => {
      if (
        //so i can delete groups myself later on
        result.rows[0].user_id === deleteRequestName ||
        deleteRequestName === "ringu"
      ) {
        db.query(chatQuery).then(() => {
          db.query(titleQuery).then(() => {
            res.status(200).json({
              code: 200,
              message: "group deleted"
            });
          });
        });
      } else {
        res.status(401).json({
          code: 401,
          message: "Only the creator may delete a group"
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
