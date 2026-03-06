import { useQuery } from "@tanstack/react-query";
import Card from "../../../../ui/card/Card";
import classes from "./Review.module.scss";
import type { FinalReport } from "../../../../../interface/interface";
import Button from "../../../../ui/button/Button";
import { FcOk } from "react-icons/fc";
import { MdOutlineCancel } from "react-icons/md";

const Review = () => {
  const { data } = useQuery<FinalReport>({
    queryKey: ["finalResult"],
    queryFn: async () => {
      throw new Error("should not fetch here");
    },
    enabled: false,
  });
  console.log("cache-data:", data);

  if (!data) {
    return <p>No data available</p>;
  }

  const WrongAnswers = data.results.filter((result) => {
    return result.isCorrect === false;
  });
  //   console.log("wrongAnswers:",WrongAnswers)

  return (
    <div className={classes["review-container"]}>
      <div className={classes.topBox}>
        <div className={classes.title}>
          <h4>English-Test 1</h4>
        </div>
        <div className={classes.score}>
          <p>Score:{data.scorePercentage} (NA%)</p>
        </div>
      </div>
      <div className={classes.titleBox}>
        <h2>Review Your Answer</h2>
        {/* <div>
          <p>Incorrect</p>
          <p>Unanswered</p>
        </div> */}
      </div>
      <div className={classes.body}>
        <Card className={classes.cardClass}>
          {WrongAnswers.map((answer, index) => {
            return (
              <ul key={index} className={classes["ul-div-parent"]}>
                <li>
                  <Card className={classes.cardClassItem}>
                    <div className={classes["number-question"]}>
                      <p>{answer.questionId}</p>
                      <p>{answer.question}</p>
                    </div>

                    <ul className={classes["ul-options-container"]}>
                      <li>
                        <ul>
                          {answer.options.map((option, index) => {
                            return (
                              <li key={index}>
                                
                                <div className={classes.options}>
                                  <p>{option}</p>
                                
                                  <div
                                    className={
                                      classes["correct-and-wrong-container"]
                                    }
                                  >
                                    <p style={{ color: "red" }}>
                                      {option === answer.selectedAnswer && (
                                        <>
                                        {/* ❌ */}
                                          <MdOutlineCancel /> Your Answer
                                        </>
                                      )}
                                    </p>

                                    <p style={{ color: "green" }}>
                                      {option === answer.correctAnswer && (
                                        <>
                                          <FcOk /> Correct Answer
                                        </>
                                      )}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                      {/* <li style={{ color: "green" }}>
                        Correct Answer: {answer.correctAnswer}
                      </li>
                      <li style={{ color: "red" }}>
                        Your Answer: {answer.selectedAnswer}
                      </li> */}
                      <div className={classes.action}>
                        <Button className={classes.btn} type="button">
                          Ask AI Why
                        </Button>
                      </div>
                    </ul>
                  </Card>
                </li>
              </ul>
            );
          })}
        </Card>
      </div>
    </div>
  );
};

export default Review;
