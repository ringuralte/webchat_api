const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
// import cookieParser from "cookie-parser";
const app = express();
const socketServer = app.listen(3001);
const io = require("socket.io").listen(socketServer);

const jwtAuth = require("./routes/authentication");
const userRouter = require("./routes/api/users");

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
io.on("connection", socket => {
  console.log("user connected");
  socket.on("chat message", function(msg) {
    console.log("message:" + JSON.stringify(msg));
    io.emit("chat message", msg);
  });
});

// app.use(cookieParser());

app.use(userRouter);

app.listen(PORT, () => {
  return console.log("Server running");
});
