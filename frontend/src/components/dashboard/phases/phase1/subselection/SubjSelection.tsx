import classes from "./SubjSelection.module.scss";
import Card from "../../../../ui/card/Card";
import { DummySubjectSelection } from "./DummySubjects";
import { Link } from "react-router-dom";

const SubjectSelection = () => {

  return (
    <div className={classes["subj-selection-container"]}>
      <h2>Subject Selection</h2>
      {DummySubjectSelection.map((subject, index) => {
        const Icon = subject.icon;
        return (
          <Card
            key={index + 1}
            className={classes.cardClass}
            // onClick={() =>
            //   navigate(`/dashboard/phase-one/sub-section/test-list/${subject.id}`)
            // }
          >
            <Link
              to={`/dashboard/phase-one/${subject.name.toLocaleLowerCase().replace(" ","-")}`}
            >
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
            </Link>
          </Card>
        );
      })}
    </div>
  );
};

export default SubjectSelection;
