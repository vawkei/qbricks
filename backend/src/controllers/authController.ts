import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";

export const registerController = async (req: Request, res: Response) => {
//   console.log("this is the register route...");

  const { firstName, lastName, email, password, confirmPassword } = req.body;

  console.log(
    `firstName:${firstName},lastName:${lastName},email:${email},password:${password},confirmPassword:${confirmPassword}`,
  );

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    console.log("fields shouldn't be empty");
    return res.status(400).json({ msg: "fields shouldn't be empty" });
  }

  if (password.trim().length < 6) {
    console.log("password shouldn't be less than 6 letters");
    return res
      .status(400)
      .json({ msg: "password shouldn't be less than 6 letters" });
  };

  if(password!==confirmPassword){
    console.log("check password")
    return res.status(400).json({msg:"check password"})
  }

  try {
    console.log("checking if email exists...")
    const emailExists = await User.findOne({ email: email });
    if (emailExists) {
      console.log("please login...");
      return res.status(400).json({ msg: "please login..." });
    }
    console.log("done checking if email exists...")
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log(message);
  }

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userData = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: hashedPassword,
  };

  try {
    const registered = await User.create(userData);
    if (registered) {
      console.log("new user registered successfully");
      res.status(200).json({ msg: "new user registered successfully" });
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log(message);
  }

  // res.status(200).json({msg:"this is the register route..."})
};

export const loginController = (req: Request, res: Response) => {
  res.status(200).json({ msg: "this is the login route..." });
  console.log("this is the login route...");
};

export const logoutController = (req: Request, res: Response) => {
  res.status(200).json({ msg: "this is the logout route..." });
  console.log("this is the logout route...");
};
