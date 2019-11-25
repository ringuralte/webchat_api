const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
const socketServer = app.listen(PORT)
const io = require("socket.io").listen(socketServer)

const userRouter = require("./routes/api/users");
const topicsRoute = require("./routes/api/topics");
const chatsRoute = require("./routes/api/chats");
const checkTokenRoute = require("./routes/api/checkToken");

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "client/out")))

// const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`));


// const http = require('http')
// const socketServer = http.createServer(app)
// const io = require("socket.io").listen(socketServer)
// socketServer.listen(80)
io.on("connection", socket => {
  console.log("user connected");
  socket.on("chat message", function(msg) {
    console.log("message:" + JSON.stringify(msg));
    socket.emit("chat message", msg);
  });
});
app.use(checkTokenRoute);
app.use(userRouter);
app.use(topicsRoute);
app.use(chatsRoute);
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
