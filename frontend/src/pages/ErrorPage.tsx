import { Link } from "react-router-dom";
import MainNav from "../components/main-nav/MainNav";

const ErrorPage = () => {
  return (
    <div>
      <MainNav />
      <main>
        <h2>Page not Found</h2>
        <p style={{ width: "100%", maxWidth: "70rem", margin: "5rem auto" }}>
          <Link to={"/"}>Click here to Go Home.</Link>
        </p>
      </main>
    </div>
  );
};

export default ErrorPage;
