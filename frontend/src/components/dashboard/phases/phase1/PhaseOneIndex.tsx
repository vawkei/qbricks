import Button from "../../../ui/button/Button";
import classes from "./PhaseOneIndex.module.scss";
import { useNavigate } from "react-router-dom";

const PhaseOneIndex = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.phaseOne}>
      <h2>Phase One</h2>
      <div className={classes.body}>
        <h2>JAMB AI Past Questions</h2>
        <p>Free test available</p>

        <div className={classes.actions}>
          <Button
            className={classes.btn}
            type="type"
            onClick={()=>navigate("/dashboard/phase-one")}
          >
            Enter Phase 1
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PhaseOneIndex;
