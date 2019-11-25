const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
const server = require("http").Server(app);
// const options = {
//   allowUpgrades: true,
//   transports: ['polling', 'websocket'],
//   pingTimeout: 9000,
//   pingInterval: 3000,
//   cookie: 'io',
//   httpCompression: true,
//   origins: '*:*'
// }
const io = require("socket.io")(server);

const userRouter = require("./routes/api/users");
const topicsRoute = require("./routes/api/topics");
const chatsRoute = require("./routes/api/chats");
const checkTokenRoute = require("./routes/api/checkToken");

//middleware
app.use(
  cors({
    origin: "https://fast-oasis-98847.herokuapp.com",
    credentials: true
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//serving file
app.use(express.static(path.join(__dirname, "client/out")));

//custom routes
app.use(checkTokenRoute);
app.use(userRouter);
app.use(topicsRoute);
app.use(chatsRoute);

//listen
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
server.listen(3000, () => console.log(`Socketio Listening on 3000`));

//socketio
io.on("connection", socket => {
  console.log("user connected");
  socket.on("chat message", function(msg) {
    console.log("message:" + JSON.stringify(msg));
    io.emit("chat message", msg);
  });
});

