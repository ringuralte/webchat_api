const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path")

require("dotenv").config();
const app = express();
const socketServer = app.listen(8080);
const io = require("socket.io").listen(socketServer);

const jwtAuth = require("./routes/authentication");
const userRouter = require("./routes/api/users");
const topicsRoute = require("./routes/api/topics");
const chatsRoute = require("./routes/api/chats");

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
io.on("connection", socket => {
  console.log("user connected");
  socket.on("chat message", function(msg) {
    console.log("message:" + JSON.stringify(msg));
    io.emit("chat message", msg);
  });
});

app.use(express.static(path.join(__dirname, 'client/out')));

app.get("/api/checkToken", jwtAuth, (req, res) => {
  res.status(200).json({
    code: 200
  });
});

app.use(userRouter);
app.use(topicsRoute);
app.use(chatsRoute);

app.listen(PORT, () => {
  return console.log("Server running");
});
