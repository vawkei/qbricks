import mongoose from "mongoose";

const PhaseOneAIExplanationSchema = new mongoose.Schema({
    questionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PhaseOneQuestions",
        required:[true,"please provide an id"],
        unique:true
    },
    explanation:{
        type:String,
        required:[true,"explanation required"]
    },
    generatedBy:{
        type:String,
        default:"gemini"
    }
},{timestamps:true});

export default mongoose.model("PhaseOneAIExplanation",PhaseOneAIExplanationSchema)