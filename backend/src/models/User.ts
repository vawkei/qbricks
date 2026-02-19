import mongoose from "mongoose";
import { IUser } from "./userTypes";

const UserSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
      required: [true, "please enter first name"],
      minlength: [3, "first name shouldn't be less than 3 letters"],
      maxlength: [20, "first name shouldn't be maore than 20 letters"],
    },
    last_name: {
      type: String,
      trim: true,
      required: [true, "please enter last name"],
      minlength: [3, "last name shouldn't be less than 3 letters"],
      maxlength: [20, "last name shouldn't be maore than 20 letters"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "please enter email"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
      trim: true,
      //   required: [true, "please enter password"], b4 google
      minlength: [6, "password shouldn't be less than 6 letters"],
      required: [
        function (this: IUser) {
          return this.provider === "local";
        },
        "please enter password",
      ],
    },
    provider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },
    googleId: {
      type: String,
    },
    isRegistered: {
      type: Boolean,
      default: false,
    },
    // registeredWithGoogle:{
    //     enum:["yes","no","null"],
    //     default:"null"
    // }
  },
  { timestamps: true },
);

export default mongoose.model("User", UserSchema);
