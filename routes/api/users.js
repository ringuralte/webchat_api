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
          res.status(200).json({
            code: 200
          });
          // console.log(`created new user ${result}`);
        })
        .catch(err => {
          res.status(400).json({
            code: 400,
            msg: "username is not available"
          });
          // console.log(`errror this is the message ${err.message}`);
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
              // console.log("correct password");
              const payload = { user };
              const cookieTimer = new Date(Date.now() + 600000);

              //might backfire later consider removing user if  not working in production
              //also do the same in authentication.js
              const token = jwt.sign(payload, process.env.TOKEN_SECRET + user);

              res
                .cookie("chatusertoken", token, {
                  expires: cookieTimer,
                  httpOnly: true
                })
                .cookie("user", user, {
                  expires: cookieTimer,
                  httpOnly: false
                  //httpOnly false but check using authentication.js
                })
                .status(200)
                .json({
                  code: 200,
                  message: "success"
                  //user: user you can send this to the browser if httpOnly: true is set in cookie user
                });
            } else {
              console.log("incorrect password");
              res.status(401).json({
                code: 401,
                msg: "incorrect password"
              });
            }
          })
          .catch(err => {
            res.status(404);
            console.log(err);
          });
      } else {
        console.log("user does not exist");
        res.status(401).json({
          code: 401,
          msg: "User does not exist"
        });
      }
    })
    .catch(err => {
      console.log("error" + err.message);
    });
});

router.get("/api/signOut", (req, res) => {
  console.log("sign out");
  res.clearCookie("chatusertoken");
  res.clearCookie("user")
  res.status(200).json({
    code: 200,
    msg: "User has logged out"
  })
});

module.exports = router;
