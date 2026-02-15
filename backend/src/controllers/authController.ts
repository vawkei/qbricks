import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerController = async (req: Request, res: Response) => {
  //   console.log("this is the register route...");

  const { first_name, last_name, email, password, confirmedPassword } = req.body;

  console.log(
    `firstName:${first_name},lastName:${last_name},email:${email},password:${password},confirmPassword:${confirmedPassword}`,
  );

  if (!first_name || !last_name || !email || !password || !confirmedPassword) {
    console.log("fields shouldn't be empty");
    return res.status(400).json({ msg: "fields shouldn't be empty" });
  }

  if (password.trim().length < 6) {
    console.log("password shouldn't be less than 6 letters");
    return res
      .status(400)
      .json({ msg: "password shouldn't be less than 6 letters" });
  }

  if (password !== confirmedPassword) {
    console.log("check password");
    return res.status(400).json({ msg: "check password" });
  }

  try {
    console.log("checking if email exists...");
    const emailExists = await User.findOne({ email: email });
    if (emailExists) {
      console.log("please login...");
      return res.status(400).json({ msg: "please login..." });
    }
    console.log("done checking if email exists...");
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log(message);
  }

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userData = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: hashedPassword,
  };

  try {
    const registered = await User.create(userData);
    if (registered) {
      registered.isRegistered = true;
      await registered.save();
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

export const loginController = async (req: Request, res: Response) => {
  console.log("this is the login route...");

  const { email, password } = req.body;
  console.log(`email:${email},password:${password}`);

  if (!email || !password) {
    console.log("fields shouldn't be empty...");
    return res.status(400).json({ msg: "fields shouldn't be empty..." });
  }

  try {
    const user = await User.findOne({ email: email });

    if (!user || !user?.isRegistered) {
      console.log("Login failed:user not found or not registered");
      return res.status(401).json({ msg: "invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log("Login failed:password entered doesn't match that in db...");
      return res.status(401).json({ msg: "invalid credentials" });
    }

    console.log("about to issue jwt cookie");
    const token = jwt.sign(
      { userId: user._id, userName: user.first_name },
      process.env.JWT_SECRET_V!,
      { expiresIn: "1d" },
    );

    if (user && isPasswordValid) {
      const oneDay = 1000 * 60 * 60 * 24;

      res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + oneDay),
        // secure:true,
        // sameSite:"none"
      });

      console.log("user loggedIn successfully...");
      res.status(200).json({ msg: "user loggedIn successfully..." });
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log("loginError:", message);
  }
};

export const logoutController = (req: Request, res: Response) => {
  console.log("this is the logout route...");

  try {
    res.cookie("token", "", {
      path: "/",
      httpOnly: true,
      expires: new Date(0),
      // secure:true,
      // sameSite:"none"
    });
    console.log("user loggedout successfully");
    res.status(200).json({ msg: "user logged out successfully..." });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log("logoutError:", message);
  }
};
