import { Router } from "express";
import authController from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/signup", authController.signup);
authRouter.post("/signin", authController.signin);
authRouter.get("/me", authMiddleware, authController.userLogged)

export default authRouter;