import Card from "../ui/card/Card";
import classes from "./About.module.scss";

const About = () => {
  return (
    <div className={classes["about-container"]}>
      {/* about section */}
      <h2>About <span>Q</span>Bricks</h2>
      <div className={classes.lead}>
        <p>
          This is an assessment and learning platform built to help learners
          learn through practice and feedback.
        </p>
      </div>

      {/* body section */}
      
      <div className={classes["body"]}>
       
        {/* problem section */}
        <Card className={classes["problem-section"]}>
          <div className={classes.heading}>
            <h2>The problem with exams preparation today</h2>
          </div>
          
            <ul>
              <li>
                Most exam prep tools focus on content dumps and not true
                assessments
              </li>
              <li>
                Students practice without understanding why answers are wrong
              </li>
              <li>
                Exams test performance, but prep tools rarely simulate
                performance
              </li>
            </ul>
          
        </Card>

        {/* difference section */}
        <Card className={classes["different-section"]}>
          <div className={classes.heading}>
            <h2>How QBricks is different</h2>
          </div>
          
            <ul>
              <li>Start with real exam style questions</li>
              <li>Use AI to expalin mistakes clearly</li>
              <li>Measure performance, not just lesson completion</li>
              <li>Exams test performance. QBricks simulates performance.</li>
            </ul>
          
        </Card>

        {/* offering section */}
        <Card className={classes["offering-section"]}>
          <div className={classes.heading}>
            <h2>What QBricks offers right now</h2>
          </div>
          
            <ul>
              <li>JAMB Styled past questions practice</li>
              <li>AI powered explanations</li>
              <li>Early stage classroom</li>
            </ul>
          

          <div className={classes["lower-part"]}>
            <p>
              We are starting with JAMB Styled questions and syllabus, but the
              system is designed to support other types of assessments over
              time.
            </p>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default About;
