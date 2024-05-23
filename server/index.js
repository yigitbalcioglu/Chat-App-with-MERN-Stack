const express = require("express");
const cors = require("cors");
const http = require("http");
const {Server} = require("socket.io")
const mongoose = require('mongoose');
const connectToMongoDB = require('./db/connectToMongoDB.js');
const {app,server} = require("./socket/socket.js")
const path = require("path");
const dotenv  =require("dotenv");
const cookieParser  = require("cookie-parser");
const authRoutes  = require("./routes/auth.routes.js");
const messageRoutes  = require("./routes/message.routes.js");
const userRoutes  = require("./routes/user.routes.js");
//const deckRoutes  = require("./routes/deck.routes.js");

/*
const app=express();
app.use(cors());

const server = http.createServer(app);
dotenv.config();*/


dotenv.config();

//const __dirname = path.resolve();
// PORT should be assigned after calling dotenv.config() because we need to access the env variables. Didn't realize while recording the video. Sorry for the confusion.
const PORT = process.env.PORT || 8000;

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
//app.use("/api/card",deckRoutes)

/*
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});*/

server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});
