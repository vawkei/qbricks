import mongoose from "mongoose";

const PhaseQuestionsSchema = new mongoose.Schema(
  {
    questionText: {
      type: String,
      trim: true,
      required: [true, "please send question"],
    },
    options: {
      type: [String],
      required: [true, "insert an array of strings"],
      validate: {
        validator: function (val: string[]) {
          return val.length === 4;
        },
        message: "A question must have exactly 4 options",
      },
    },
    correctAnswer: {
      type: String,
      required: [true, "please insert correctAnswer"],
    },
    subject: {
      type: String,
      required: true,
      enum: ["English", "Mathematics", "Physics", "Chemistry"],
      test: {
        type: String,
        required: [true, "please insert test"],
      },
    },
    section: {
      type: String,
      default: null,
    },
    // difficulty: {
    //   type: String,
    //   enum: ["easy", "medium", "hard"],
    //   default: "medium",
    // }, 📒📒why adding difficulty to the model📒📒
  },
  { timestamps: true },
);

export default mongoose.model("PhaseOneQuestions",PhaseQuestionsSchema);