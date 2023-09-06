import '../styles/navbar.scss';
import { Outlet } from "react-router-dom";

import Nav from '../COMPONENT/Nav';
import AppTitel from '../COMPONENT/AppTitel';
function Mainlayout(){
    return(
        <div className="nav-bar">  
            <div className='nav'>
               <Nav/>
               <AppTitel />
            </div>
            <Outlet /> 
        </div>
    )
}

export default Mainlayout;