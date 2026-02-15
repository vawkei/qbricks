import classes from "./MainFooter.module.scss";
const MainFooter = () => {
  const brand = "<HowZ />";

  return (
    <div className={classes["main-footer-container"]}>
      <p>Hand crafted with passion by voke || vawkei</p>
      <small><span>Q</span>Bricks &copy; {brand} 2026</small>
    </div>
  );
};

export default MainFooter;
