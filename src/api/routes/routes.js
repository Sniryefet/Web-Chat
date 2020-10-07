import express from "express";
import {
  homeController,
  chatLobbyController,
} from "../controllers/chatController.js";

let router = express.Router();

router.get("/", homeController);
// define the about route
router.get("/chatRoom",chatLobbyController);

export default router;
