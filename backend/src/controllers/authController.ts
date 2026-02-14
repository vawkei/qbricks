import { Request,Response } from "express"

export const registerController = (req:Request,res:Response)=>{
    res.status(200).json({msg:"this is the register route..."})
    console.log("this is the register route...")
};

export const loginController = (req:Request,res:Response)=>{

    res.status(200).json({msg:"this is the login route..."})
    console.log("this is the login route...")
};

export const logoutController = (req:Request,res:Response)=>{
    res.status(200).json({msg:"this is the logout route..."});
    console.log("this is the logout route...");
}