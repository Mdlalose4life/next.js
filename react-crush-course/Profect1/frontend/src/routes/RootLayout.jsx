import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

function Rootlayout(){
    return(
      <>
        <MainHeader/>
        <Outlet/>
      </>  
    )
}
export default Rootlayout;