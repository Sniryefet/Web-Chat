import express from "express";
import {
  homeController,
  chatRoomController,
} from "../controllers/chatController.js";

let router = express.Router();

router.get("/", homeController);
// define the about route
router.get("/chatRoom",chatRoomController);


export default router;
