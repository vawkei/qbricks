import { Outlet } from "react-router-dom";
import MainNav from "../components/main-nav/MainNav";
import MainFooter from "../components/main-footer/MainFooter";

const RootLayout = () => {
  return (
    <div>
      <MainNav />
      <main
        style={{
          width: "100%",
          maxWidth: "50rem",
          margin: "5rem auto",
        }}
      >
        <Outlet />
      </main>
      <MainFooter />
    </div>
  );
};

export default RootLayout;
