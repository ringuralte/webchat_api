/* eslint-disable func-names */
/* eslint-disable no-else-return */
/* eslint-disable no-console */
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");

const saltRounds = 10;

const router = express.Router();

router.post("/api/signUp", (req, res) => {
  const { user, password } = req.body;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      const queryString = "INSERT INTO users (user_id, password) VALUES (?, ?)";
      db.query(queryString, [user, hash])
        .then(result => {
          console.log(`created new user ${result}`);
          db.end();
        })
        .catch(err => {
          console.log(`errror${err.message}`);
        });
    });
  });
});

router.post("/api/signIn", (req, res) => {
  const { user, password } = req.body;
  const queryString = "SELECT * FROM users WHERE user_id = ?";
  db.query(queryString, [user])
    .then(result => {
      if (result.length) {
        const hash = result[0].password;
        bcrypt
          .compare(password, hash)
          .then(same => {
            if (same === true) {
              console.log("correct password");
              const payload = { user };
              const token = jwt.sign(payload, process.env.TOKEN_SECRET);
              res
                .cookie("chatusertoken", token, {
                  expires: new Date(Date.now() + 5000),
                  httpOnly: false
                })
                .status(200)
                .json({
                  code: 200,
                  user: user,
                  message: "success"
                });
            } else {
              console.log("incorrect password");
              res.status(401).json({
                code: 401,
                message: "incorrect password"
              });
            }
          })
          .catch(err => console.log(err));
      } else {
        console.log("user does not exist");
        res.status(401).json({
          code: 401,
          message: "User does not exist"
        });
      }
    })
    .catch(err => {
      console.log("error" + err.message);
    });
});

module.exports = router;
