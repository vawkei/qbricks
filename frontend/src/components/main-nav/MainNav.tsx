import classes from "./MainNav.module.scss";
import Card from "../ui/card/Card";
import { NavLink } from "react-router-dom";
import { ShowWhenLoggedIn, ShowWhenLoggedOut } from "../auth/Protected";
import { useLogout } from "../../features/auth/useLogout";

const MainNav = () => {

  const {mutateAsync:logoutUser} = useLogout()

  const navDataHandler = (navData: any) => {
    return navData.isActive ? classes.active : "";
  };

  const logoutHandler =async ()=>{
    await logoutUser();
  }

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
          <ShowWhenLoggedOut>
            <li>
              <NavLink to={"/auth"} className={navDataHandler}>
                Login
              </NavLink>
            </li>
          </ShowWhenLoggedOut>
          <ShowWhenLoggedIn>
            <li onClick={()=>logoutHandler()}>Logout</li>
          </ShowWhenLoggedIn>
        </ul>
      </nav>
    </Card>
  );
};

export default MainNav;
