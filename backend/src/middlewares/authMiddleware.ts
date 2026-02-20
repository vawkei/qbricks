import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
  user?: { userId: string; userName: string };
}

const authenticationMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  console.log("cheking req.cookies...");
  const token = req.cookies.token;

  if (!token) {
    console.log("You are not authorized to access this route. ");
    return res
      .status(404)
      .json({ msg: "You are not authorized to access this route." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_V!);
    console.log("decoded:", decoded);

    if (!decoded || typeof decoded === "string") {
      throw new Error("invalid token payload");
    }

    req.user = { userId: decoded.userId, userName: decoded.userName };
    console.log("reqUser:", req.user);
    next();
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unauthorized: Invalid or expired token";

    console.log("authenticationMiddlewareErr:", message);
    res.status(401).json({ msg: message });
  }
};

export default authenticationMiddleware