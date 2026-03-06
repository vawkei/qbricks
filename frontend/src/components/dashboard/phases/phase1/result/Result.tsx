import Button from "../../../../ui/button/Button";
import Card from "../../../../ui/card/Card";
import classes from "./Result.module.scss";
import { useQuery } from "@tanstack/react-query";
import type { FinalReport } from "../../../../../interface/interface";
import { useParams, useNavigate } from "react-router-dom";

const Result = () => {
  const { data } = useQuery<FinalReport>({
    queryKey: ["finalResult"],
    queryFn: async () => {
      throw new Error("should not fetch here");
    },
    enabled: false,
  });
  console.log("cache-data:", data);

  const navigate = useNavigate();

  const { id, testId } = useParams();

  if (!data) {
    return <p>No result found</p>;
  }

  return (
    <div className={classes["result-container"]}>
      <h2>Test Completed</h2>
      <Card className={classes.cardClass}>
        <div className={classes.top}>
          {/* <p>Your Score is <b>32/60</b></p> */}
          <p>
            {data.totalCorrect}/{data.totalQuestions}
          </p>
          <p>
            Your Grade is <b>{data.scorePercentage}%</b>
          </p>
        </div>
        <div className={classes.body}>
          <div className={classes.strengthBox}>
            <h4>Strength:</h4>
            <div className={classes["strength"]}>
              {data.strengths.map((strength, index) => {
                return (
                  <div key={index}>
                    <p>{strength}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={classes.weaknessBox}>
            <h4>Weakness:</h4>
            <div className={classes["weakness"]}>
              {data.weaknesses.map((weakness, index) => {
                return (
                  <div key={index}>
                    <p>{weakness}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {data.sectionBreakdown && (
            <div className={classes["section-breakdown"]}>
              <h4>Section BreakDown</h4>
              <p>
                Comprehension: {data.sectionBreakdown.Comprehension.correct}/
                {data.sectionBreakdown.Comprehension.total}
              </p>
              <p>
                Vocabulary: {data.sectionBreakdown.Vocabulary.correct}/
                {data.sectionBreakdown.Vocabulary.total}
              </p>
              <p>
                Oral English : {data.sectionBreakdown.OralEnglish.correct}/
                {data.sectionBreakdown.OralEnglish.total}
              </p>
            </div>
          )}
        </div>
        <div className={classes.action}>
          <Button
            className={classes.btn1}
            type="button"
            onClick={() =>
              navigate(`/dashboard/phase-one/${id}/${testId}/review`)
            }
          >
            Review Answers
          </Button>
          <Button className={classes.btn2} type="button">
            Retry Test
          </Button>
          <Button className={classes.btn3} type="button">
            Unlock Full English
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Result;
