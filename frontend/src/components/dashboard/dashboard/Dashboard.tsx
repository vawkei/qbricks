import PhaseOneIndex from "../phases/phase1/PhaseOneIndex";
import PhaseTwoIndex from "../phases/phase2/PhaseTwoIndex";
import classes from "./Dashboard.module.scss";

const Dashboard = () => {
    return ( 
        <div className={classes.dashboard}>
            <PhaseOneIndex />
            <PhaseTwoIndex />
        </div>
     );
}
 
export default Dashboard;