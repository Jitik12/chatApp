const express = require("express");
const app = express();
const PORT = 4000;

const http = require("http").Server(app);
const cors = require("cors");
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(cors());

socketIO.on("connection", (socket) => {
  console.log(`Someone Joined : ${socket.id}`);

  socket.on("message", (data) => {
    var oyoID = data.oyoID ;
    socketIO.emit(`${oyoID}_Response`, data);
  });

  socket.on("newUser", (data) => {
    socketIO.emit("newUserNotification", data);
  });

  socket.on("disconnect", () => {
    console.log(`Someone Left : ${socket.id}`);
  });
});

socketIO.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello Bitch",
  });
});

http.listen(PORT, () => {
  console.log(`Hello Armaan, Server listening on ${PORT}`);
});
