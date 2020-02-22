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
      const query = {
        text: "INSERT INTO users (user_id, password) VALUES ($1, $2)",
        values: [user, hash]
      };
      db.query(query)
        .then(result => {
          res.status(200).json({
            code: 200
          });
          console.log(`created new user ${result}`);
        })
        .catch(err => {
          //might miss some errors too
          //the codes are from err.code from pg package i guess
          //23505 checks for uniqueness and 22001 checks for length
          if (err.code == 23505) {
            res.status(400).json({
              code: 23505,
              msg: "username is not available"
            });
          }
          if (err.code == 22001) {
            res.status(400).json({
              code: 22001,
              msg: "username should be < 25 characters"
            });
          }
          console.log(`errror this is the message ${err.message}`);
        });
    });
  });
});

router.post("/api/signIn", (req, res) => {
  const { user, password } = req.body;
  const query = {
    text: "SELECT * FROM users where user_id = $1",
    values: [user]
  };
  db.query(query)
    .then(result => {
      if (result.rowCount) {
        const hash = result.rows[0].password;
        bcrypt
          .compare(password, hash)
          .then(same => {
            if (same === true) {
              // console.log("correct password");
              const payload = { user };
              const cookieTimer = new Date(Date.now() + 6000000);

              //might backfire later consider removing user if  not working in production
              //also do the same in authentication.js
              const token = jwt.sign(payload, process.env.TOKEN_SECRET + user);

              res
                .cookie("chatusertoken", token, {
                  expires: cookieTimer,
                  httpOnly: true,
                  sameSite: "None",
                  secure: true
                })
                .cookie("user", user, {
                  expires: cookieTimer,
                  httpOnly: true,
                  sameSite: "None",
                  secure: true
                  //httpOnly false but check using authentication.js
                })
                .status(200)
                .json({
                  code: 200,
                  message: "success",
                  user: user
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
        res.status(400).json({
          code: 400,
          msg: "User does not exist"
        });
      }
    })
    .catch(err => {
      console.log("signin error " + err.message);
    });
});

router.get("/api/signOut", (req, res) => {
  res.clearCookie("chatusertoken");
  res.clearCookie("user");
  res.status(200).json({
    code: 200,
    msg: "User has logged out"
  });
});

module.exports = router;
