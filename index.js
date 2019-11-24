const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const socketIO = require("socket.io")
require("dotenv").config();

const jwtAuth = require("./routes/authentication");
const userRouter = require("./routes/api/users");
const topicsRoute = require("./routes/api/topics");
const chatsRoute = require("./routes/api/chats");

const app = express()
const http = require("http").Server(app);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.get("/api/checkToken", jwtAuth, (req, res) => {
  res.status(200).json({
    code: 200
  });
});

app.use(userRouter);
app.use(topicsRoute);
app.use(chatsRoute);
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "client/out"))).listen(PORT, () => console.log(`Listening on ${PORT}`));
// const server = app.listen(3000);
// const io = require("socket.io")(server);
const io = socketIO(http)

io.on("connection", socket => {
  console.log("user connected");
  socket.on("chat message", function(msg) {
    console.log("message:" + JSON.stringify(msg));
    io.emit("chat message", msg);
  });
});

http.listen(3000, () => {
  console.log("listening on 3000")
})


// app.use(express.static(path.join(__dirname, "client/out")));


