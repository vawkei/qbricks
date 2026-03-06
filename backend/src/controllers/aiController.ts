import { Request,Response } from "express";

export const phaseOneAskAi = (req: Request, res: Response) => {
  console.log("phaseOneAskAi Route...");
  res.status(200).json({msg:"phaseOneAskAi Route..."});
};
