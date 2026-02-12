import Button from "../ui/button/Button";
import Card from "../ui/card/Card";
import classes from "./HowItWorks.module.scss";

const HowItWorks = () => {
  return (
    <div className={classes["h-i-w-container"]}>
      <h2>
        How <span>Q</span>Bricks Works
      </h2>
      <div className={classes.lead}>
        <p>Learn by practicing. Improve by understanding</p>
      </div>

      <div className={classes.body}>
        <Card className={classes["first-card"]}>
          <div className={classes.heading}>
            <div className={classes.one}>
              <h2>1.</h2>
            </div>
            <h2>Practice with real exam questions</h2>
          </div>
          <div className={classes["ul-div"]}>
            <ul>
              <li>Choose a subject</li>
              <li>Take full length practice tests</li>
              <li>Answer by voice or text</li>
              <div className={classes["bottom-one"]}>
                <p>One full test is free to try</p>
              </div>
            </ul>
          </div>
        </Card>
        <Card className={classes["second-card"]}>
          <div className={classes.heading}>
            <div className={classes.one}>
              <h2>2.</h2>
            </div>
            <h2>Review your performance</h2>
          </div>
          <div className={classes["ul-div"]}>
            <ul>
              <li>see your score</li>
              <li>Identify strengths</li>
              <li>Discover weak areas</li>
              <div className={classes["bottom-two"]}>
                <p>
                  No guess work. You see exactly where you need improvement.
                </p>
              </div>
            </ul>
          </div>
        </Card>
        <Card className={classes["third-card"]}>
          <div className={classes.heading}>
            <div className={classes.one}>
              <h2>3.</h2>
            </div>
            <h2>Understand your mistake</h2>
          </div>
          <div className={classes["ul-div"]}>
            <ul>
              <li>AI explains why answers are correct</li>
              <li>AI explains why your choice was wrong</li>
              <div className={classes["bottom-three"]}>
                <p>One full topic is free</p>
              </div>
            </ul>
          </div>
        </Card>
        <div className={classes.action}>
          {/* <button>Get Started...</button> */}
          <Button type="type">Get Started...</Button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
