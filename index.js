const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, { cookie: false });

const userRouter = require("./routes/api/users");
const topicsRoute = require("./routes/api/topics");
const chatsRoute = require("./routes/api/chats");
const checkTokenRoute = require("./routes/api/checkToken");
const createGroupRoute = require("./routes/api/groups");

//middleware
app.use(
  cors({
    // origin: "http://localhost:3000",
    origin: "https://webchat.ringuralte.now.sh",
    credentials: true
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//serving file
// app.use(express.static(path.join(__dirname, "client/out")));

//custom routes
app.use(checkTokenRoute);
app.use(userRouter);
app.use(topicsRoute);
app.use(chatsRoute);
app.use(createGroupRoute);

//listen
server.listen(PORT, () => console.log(`Listening on ${PORT}`));

//socketio
io.on("connection", socket => {
  // console.log("user connected");
  socket.on("chat message", function(msg) {
    console.log("message:" + JSON.stringify(msg));
    io.emit("chat message", msg);
  });
});
