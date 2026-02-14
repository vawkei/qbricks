import { Request,Response } from "express";

export const notFoundMiddleware = (_req:Request,res:Response)=>{
    const message = "Route doesn't exist..."

    console.log("notFoundMiddlewareMessage:",message)
   res.status(404).json({msg:message});
   return
};