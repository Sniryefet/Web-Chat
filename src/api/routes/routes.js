import express from "express";
import {
  homeController,
  chatRoomController,
} from "../controllers/chatController.js";
import {registerController,loginController} from '../controllers/userController.js'

let router = express.Router();

router.get("/", homeController);
// define the about route
router.get("/chatRoom",chatRoomController);

router.get('/login',loginController)

router.get('/register',registerController)


export default router;

// TODO :
// 1. Add login and register routes
// 2. add authentication to the '/' and 'chatRoom'