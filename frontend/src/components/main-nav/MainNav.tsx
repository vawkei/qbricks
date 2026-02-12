import classes from "./MainNav.module.scss";
import Card from "../ui/card/Card";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  const navDataHandler = (navData: any) => {
    return navData.isActive ? classes.active : "";
  };

  return (
    <Card className={classes.heading}>
      <div>
        <h1>
          <NavLink to={"/"} className={navDataHandler}>
            <span>Q</span>Bricks
          </NavLink>
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/about"} className={navDataHandler}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/how-it-works"} className={navDataHandler}>
              How it works
            </NavLink>
          </li>
          <li>
            <NavLink to={"/auth"} className={navDataHandler}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </Card>
  );
};

export default MainNav;
