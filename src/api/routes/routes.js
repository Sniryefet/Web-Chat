import express from "express";
import {
  homeController,
  chatRoomController,
} from "../controllers/chatController.js";
import {
  registerController,
  loginController,
  postRegisterController,
  postLoginController,
  logoutController
} from "../controllers/userController.js";

let router = express.Router();

router.get("/", homeController);
// define the about route
router.get("/chatRoom", chatRoomController);

router.get("/login", loginController);

router.get('/logout',logoutController)

router.get("/register", registerController);

router.post("/login", postLoginController);

router.post("/register", postRegisterController);

export default router;

