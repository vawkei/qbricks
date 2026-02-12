import classes from "./Home.module.scss"; 

const Home = () => {
  return (
    <div className={classes["home-container"]}>
      <h1><span>Q</span>Bricks</h1>
      <p>Practice with real past questions. Understand with AI</p>
    </div>
  );
};

export default Home;
