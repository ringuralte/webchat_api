const express = require("express");

const app = express();
const socketServer = app.listen(3001);
const io = require("socket.io").listen(socketServer);
io.on("connection", socket => {
  console.log("user connected");
  socket.on("chat message", function(msg) {
    console.log("message:" + JSON.stringify(msg));
    io.emit("chat message", msg);
  });
});

module.exports = io;
