import { Router } from "express";
import {
  googleLoginController,
  loginController,
  logoutController,
  onboardingController,
  registerController,
} from "../controllers/authController";
import  authenticationMiddleware  from "../middlewares/authMiddleware";

const authRouter = Router();

authRouter.post("/register", registerController);
authRouter.post("/login", loginController);
authRouter.patch("/onboarding",authenticationMiddleware,onboardingController)
authRouter.post("/google", googleLoginController);
authRouter.get("/logout", logoutController);

export default authRouter;
