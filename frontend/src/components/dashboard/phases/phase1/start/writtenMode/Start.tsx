import classes from "./Start.module.scss";
import { useState, useEffect } from "react";
import {
  DummyInstructions,
  DummyPassages,
  DummyQuestions,
} from "./DummyQuestions";
import Button from "../../../../../ui/button/Button";
import { formatTime } from "../../../../../../utils/Utils";
import type {
  ResultDetails,
  SectionStats,
} from "../../../../../../interface/interface";

const Start = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); //600 seconds is 10minutes
  const [answers, setAnswers] = useState<any>({});

  const currentQuestion = DummyQuestions[currentIndex];

  // get instruction:
  const instruction = DummyInstructions.find(
    (ins) => ins.id === currentQuestion.instructionId,
  );
  // console.log("what's going on here...",instruction)

  // Get passage if it exists
  let passage = null;
  if (currentQuestion.passageId) {
    passage = DummyPassages.find(
      (passage) => passage.id === currentQuestion.passageId,
    );
  }

  const handleNext = () => {
    if (currentIndex < DummyQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  //   const handleSubmit = () => {
  //     console.log("What up blood!");
  //   };

  const handleSubmit = () => {
    let totalCorrect = 0;
    let totalWrong = 0;
    let totalUnanswered = 0;

    const sectionStats: SectionStats = {};
    const resultDetails: ResultDetails[] = [];

    DummyQuestions.forEach((question) => {
      const selectedAnswer = answers[question.id]; // number or undefined

      // convert correct answer string to its index
      const correctIndex = question.options.indexOf(question.answer);

      console.log(
        "selectedAnswer:",
        selectedAnswer,
        "correctIndex:",
        correctIndex,
      );

      //  Count overall result
      if (selectedAnswer === undefined) {
        totalUnanswered++;
      } else if (selectedAnswer === correctIndex) {
        totalCorrect++;
      } else {
        totalWrong++;
      }

      //  Track section performance
      if (!sectionStats[question.section]) {
        sectionStats[question.section] = {
          total: 0,
          correct: 0,
        };
      }

      sectionStats[question.section].total++;

      if (selectedAnswer === correctIndex) {
        sectionStats[question.section].correct++;
      }

      //  Save detailed result
      resultDetails.push({
        questionId: question.id,
        section: question.section,
        selectedAnswer:
          selectedAnswer !== undefined
            ? question.options[selectedAnswer]
            : null,
        correctAnswer: question.answer,
        isCorrect: selectedAnswer === correctIndex,
      });
    });

    //  Determine strengths & weaknesses
    const strengths = [];
    const weaknesses = [];

    for (let section in sectionStats) {
      const { total, correct } = sectionStats[section];
      const percentage = (correct / total) * 100;

      if (percentage >= 70) {
        strengths.push(section);
      } else if (percentage <= 40) {
        weaknesses.push(section);
      }
    }

    const finalReport = {
      totalQuestions: DummyQuestions.length,
      totalCorrect,
      totalWrong,
      totalUnanswered,
      scorePercentage: Math.round((totalCorrect / DummyQuestions.length) * 100),

      sectionBreakdown: sectionStats,
      strengths,
      weaknesses,
      results: resultDetails,
    };

    console.log("Final Report:", finalReport);
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className={classes["start-container"]}>
      {/* <h2>Start Questions</h2> */}

      <div className={classes["top-bar"]}>
        <div>
          <h2>English Language</h2>
        </div>

        <div>
          <p>Time Left: {formatTime(timeLeft)}</p>
        </div>

        <div>
          <p>
            Question{currentIndex + 1} of {DummyQuestions.length}
          </p>
        </div>
      </div>

      {/* Passage (Only shows if exists) */}
      {passage && (
        <div className={classes.passageBox}>
          <h4>{passage.title}</h4>
          <p style={{ whiteSpace: "pre-line" }}>{passage.content}</p>
        </div>
      )}

      {/* Instruction */}
      {instruction && (
        <div className={classes.instructionBox}>
          <strong>Instruction:</strong> {instruction.text}
        </div>
      )}

      {/* Question */}

      <div className={classes.questionBox}>
        <h4>{currentQuestion.question}</h4>

        {currentQuestion.options.map((option, index) => (
          <div key={index} className={classes["options-div"]}>
            <label htmlFor="">
              <input
                type="radio"
                name={`question-${currentQuestion.id}`}
                checked={answers[currentQuestion.id] === index}
                onChange={() =>
                  setAnswers((prev: any) => ({
                    ...prev,
                    [currentQuestion.id]: index,
                  }))
                }
              />
              {option}
            </label>
          </div>
        ))}
      </div>

      {/* Navigation */}

      <div className={classes.action}>
        <Button
          type="button"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          Previous
        </Button>
        <Button
          type="button"
          onClick={handleNext}
          disabled={currentIndex === DummyQuestions.length - 1}
        >
          Next
        </Button>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Start;
