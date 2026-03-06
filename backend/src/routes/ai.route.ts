import { Router } from "express";
import { phaseOneAskAi } from "../controllers/aiController";
import authenticationMiddleware from "../middlewares/authMiddleware";

const aiRouter = Router();

aiRouter.post("/phase-one-ask-ai", authenticationMiddleware, phaseOneAskAi);

export default aiRouter;
