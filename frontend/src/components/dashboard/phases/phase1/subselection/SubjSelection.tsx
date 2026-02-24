import classes from "./SubjSelection.module.scss";
import Card from "../../../../ui/card/Card";
import { DummySubjectSelection } from "./DummySubjects";

const SubjectSelection = () => {
  return (
    <div className={classes["subj-selection-container"]}>
      <h2>Subject Selection</h2>
      {DummySubjectSelection.map((subject) => {
        const Icon = subject.icon;
        return (
          <Card className={classes.cardClass}>
            <ul>
              <li>
                <div className={classes["icon-and-name-div"]}>
                  <p>
                    <Icon color={subject.iconColor} />
                  </p>
                  <p>{subject.name}</p>
                </div>
                <div className={classes["condition-div"]}>
                  <p
                    className={
                      subject.name === "English Language"
                        ? classes.free
                        : classes["condition-div"]
                    }
                  >
                    {subject.condition}
                  </p>
                </div>
              </li>
            </ul>
          </Card>
        );
      })}
    </div>
  );
};

export default SubjectSelection;
