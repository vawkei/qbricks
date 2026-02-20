import Button from "../ui/button/Button";
import Card from "../ui/card/Card";
import classes from "./onboarding.module.scss";
import { FaGraduationCap } from "react-icons/fa6";
// import { LiaClipboardListSolid } from "react-icons/lia";
import { AiOutlineProfile } from "react-icons/ai";
import { FaRegCheckCircle } from "react-icons/fa";
import { useOnboarding } from "../../features/auth/useOnboarding";

const Onboarding = () => {
  const { mutateAsync: onboardUser, isPending } = useOnboarding();

  const handlerCompleteOnboarding = async () => {
    await onboardUser();
  };

  return (
    <Card className={classes["onboarding-container"]}>
      <h2>QBricks has two modes</h2>
      <div className={classes["card-container"]}>
        <Card className={classes.cardClass}>
          <FaRegCheckCircle size={16} className={classes.circle} />
          <AiOutlineProfile color="blue" size={44} />
          <div className={classes.right}>
            <h3>Phase 1</h3>
            <p>JAMB Past Questions</p>
          </div>
        </Card>
        <Card className={classes.cardClass}>
          <FaGraduationCap color="blue" size={44} />
          <div className={classes.right}>
            <h3>Phase 2</h3>
            <p>AI Tutor Classroom</p>
          </div>
        </Card>
      </div>
      <div className={classes.actions}>
        <Button
          type="type"
          className={classes.btn}
          onClick={handlerCompleteOnboarding}
          disabled={isPending}
        >
          Continue to Dashboard
        </Button>
      </div>
    </Card>
  );
};

export default Onboarding;

// 08110985276
