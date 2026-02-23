import Button from "../../../ui/button/Button";
import classes from "./PhaseTwo.module.scss";

const PhaseTwo = () => {
  return (
    <div className={classes.phaseTwo}>
      <h2>Phase Two</h2>
      <div className={classes.body}>
        <h2>AI Tutor Classroom</h2>
        <p>1 topic free</p>
        <div className={classes.actions}>
          <Button className={classes.btn} type="type">
            Enter Phase 2
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PhaseTwo;
