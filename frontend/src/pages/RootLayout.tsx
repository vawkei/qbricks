import { Outlet } from "react-router-dom";
import MainNav from "../components/main-nav/MainNav";

const RootLayout = () => {
  return (
    <div>
      <MainNav />
      <main
        style={{
          width: "100%",
          maxWidth: "50rem",
          margin: "2rem auto",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
