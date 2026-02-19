import { Router } from "express";
import {
  googleLoginController,
  loginController,
  logoutController,
  registerController,
} from "../controllers/authController";

const authRouter = Router();

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.post("/google", googleLoginController);
authRouter.get("/logout", logoutController);

export default authRouter;
