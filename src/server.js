import express from "express";
import http from "http"; //check if needed
import socketio from "socket.io";
import passport from 'passport'
import initMongoDB from "./config/mongodb.js";
import initMiddlewares from "./api/middleware/Middlewares.js";
import initSocketIo from "./api/controllers/ioController.js";
import { initRoutes } from "./api/routes/index.js";

const PORT = process.env.PORT || 3000;

const createServer = () => {
  const app = express();
  const server = http.createServer(app);
  const io = socketio(server);

  // set middleware
  initMiddlewares(app,passport);

  // init routes
  initRoutes(app);

  // set config
  initMongoDB();

  // init socket.io
  initSocketIo(io);

  server.listen(PORT, () => {
    console.log(`server is listenning on port ${PORT}`);
  });
};

export default createServer;
