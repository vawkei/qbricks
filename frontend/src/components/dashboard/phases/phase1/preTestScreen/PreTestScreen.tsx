import classes from "./PreTestScreen.module.scss";
import Card from "../../../../ui/card/Card";
import { RiMic2Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const PreTestScreen = () => {
  const navigate = useNavigate();
  const { id, testId } = useParams();
  console.log("id:", id, "testId:", testId);

  //  const handleWrittenMode = () => {
  //   navigate(`/dashboard/phase-one/${id}/${testId}/start?mode=written`);
  // };

  return (
    <div className={classes["pre-test-screen-container"]}>
      <h2>Pre-Test Screen</h2>
      <Card className={classes.cardClass}>
        <p>You 'll answer JAMB STYLED questions.</p>
        <p>You can use voice or text.</p>
        <p>You 'll get feedback at the end.</p>
        <div className={classes.actions}>
          <Card className={classes["mode"]}>
            <RiMic2Fill /> Voice Mode
          </Card>
          <Card
            className={classes["mode"]}
            onClick={() =>
              navigate(`/dashboard/phase-one/${id}/${testId}/start?mode=written`)
            }
          >
            <FaPen /> Written Mode
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default PreTestScreen;
