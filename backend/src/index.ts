import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware";
import { notFoundMiddleware } from "./middlewares/notFoundMiddleware";
import authRouter from "./routes/auth-route";

const authRoute = authRouter;

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "my-custom-header"],
};

// number 1:
app.use(cors(corsOptions));

// number 2:
app.use(cookieParser());

// number 3"
app.use(express.json());

// route:
app.get("/", (_req, res) => {
  res.send("<h1>This is QBricks server...</h1>");
});

app.use("/api/v1/auth", authRoute);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const PORT = Number(process.env.PORT) || 5000;

// startup server without database:
// const start = () => {
//   try {
//     app.listen(PORT, "localhost", () => {
//       console.log(`server listening on ${PORT}`);
//     });
//   } catch (error) {
//     const message =
//       error instanceof Error ? error.message : "something went wrong";
//     console.log("startupError:", message);
//   }
// };

// start();

// const URL = "mongodb://localhost:27017/QBRICKS";
const URL:any = process.env.MONGODB_URI

// startup server with a database:
const start = async () => {
  try {
    await mongoose.connect(URL);
    app.listen(PORT, "localhost", () => {
      console.log(`server listening on ${PORT}`);
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "something went wrong";
    console.log("startupError:", message);
  }
};

start();
