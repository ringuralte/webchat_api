const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");
const http = require('http')

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app)
const io = require("socket.io")(server, {
  handlePreflightRequest: (req, res) => {
    const headers = {
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Origin": req.headers.origin,
      "Access-Control-Allow-Credentials": true
    };
    res.writeHeader(200, headers);
    res.end();
  }
})

const userRouter = require("./routes/api/users");
const topicsRoute = require("./routes/api/topics");
const chatsRoute = require("./routes/api/chats");
const checkTokenRoute = require("./routes/api/checkToken");

app.use(cors({
  origin: "https://fast-oasis-98847.herokuapp.com:3000",
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
server.listen(3000)
app.use(checkTokenRoute);
app.use(userRouter);
app.use(topicsRoute);
app.use(chatsRoute);
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
