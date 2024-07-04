import { Outlet } from "react-router-dom";
import Navbar from "../../Page/Navbar/Navbar";

const Main = () => {
 return (
  <div className="bg">
   <div className="h-11">
    {/* Navbar  */}
    <Navbar/>
   </div>
   {/* outlet */}
   <div> 
{/* <Outlet/> */}
   </div>
 
  </div>
 );
};

export default Main;