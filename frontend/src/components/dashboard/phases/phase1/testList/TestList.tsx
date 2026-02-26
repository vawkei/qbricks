import classes from "./TestList.module.scss";
import { useParams } from "react-router-dom";
import { DummyTestSelection } from "./DummyTestSelection";
import Card from "../../../../ui/card/Card";
import Button from "../../../../ui/button/Button";
import { useNavigate } from "react-router-dom";

const TestList = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log("id:", id);

  var nairaSymbol = "\u20A6";

  const tests =
    id &&
    Array.isArray(DummyTestSelection[id as keyof typeof DummyTestSelection])
      ? DummyTestSelection[id as keyof typeof DummyTestSelection]
      : [];

  return (
    <div>
      {tests.map((test, index) => {
        return (
          <Card className={classes["test-list-container"]} key={index + 1}>
            <h2>{test.subject}</h2>
            <ul>
              {test.isLocked === false ? (
                <Card className={classes.cardClass}>
                  <li>
                    <div>
                      <h3>Free Demo Test</h3>
                      <p>60 Questions</p>
                    </div>
                    <div>
                      <Button
                        type="button"
                        className={classes.btn}
                        onClick={() =>
                          navigate(
                            `/dashboard/phase-one/${test.subject?.toLocaleLowerCase()}/${test.id}`,
                          )
                        }
                      >
                        Start
                      </Button>
                    </div>
                  </li>
                </Card>
              ) : (
                <Card className={classes.cardClass}>
                  <li>
                    <div>
                      <h3>{test.title}</h3>
                      <p>Unlock full English for {nairaSymbol}2,000</p>
                    </div>
                    <div>
                      <Button
                        type="button"
                        className={classes.btn}
                        disabled={true}
                      >
                        Locked
                      </Button>
                    </div>
                  </li>
                </Card>
              )}
            </ul>
          </Card>
        );
      })}
    </div>
  );
};

export default TestList;
