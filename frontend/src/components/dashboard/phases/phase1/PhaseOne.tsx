import Button from "../../../ui/button/Button";
import classes from "./PhaseOne.module.scss";

const PhaseOne = () => {
  return (
    <div className={classes.phaseOne}>
      <h2>Phase One</h2>
      <div className={classes.body}>
        <h2>JAMB AI Past Questions</h2>
        <p>Free test available</p>

        <div className={classes.actions}>
          <Button className={classes.btn} type="type">
            Enter Phase 1
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PhaseOne;
