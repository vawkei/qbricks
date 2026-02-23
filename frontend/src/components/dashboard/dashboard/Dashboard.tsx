import PhaseOne from "../phases/phase1/PhaseOne";
import PhaseTwo from "../phases/phase2/PhaseTwo";
import classes from "./Dashboard.module.scss";

const Dashboard = () => {
    return ( 
        <div className={classes.dashboard}>
            <PhaseOne />
            <PhaseTwo />
        </div>
     );
}
 
export default Dashboard;