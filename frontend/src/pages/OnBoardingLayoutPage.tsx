import { Outlet } from "react-router-dom";

const OnBoardingLayoutPage = () => {
    return ( 
        <div style={{ maxWidth: "40rem", margin: "4rem auto" }}>
            <h1>QBricks</h1>
            <Outlet />
        </div>
     );
}
 
export default OnBoardingLayoutPage;