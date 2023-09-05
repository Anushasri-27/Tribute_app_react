import { Outlet } from "react-router-dom";
import Nav from '../COMPONENT/Nav';
import AppTitel from '../COMPONENT/AppTitel';
function Mainlayout(){
    return(
        <div className="nav-bar">
            <Nav/>
            <AppTitel />
            <Outlet />
        </div>
    )
}

export default Mainlayout;