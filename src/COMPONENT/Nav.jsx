import '../styles/navbar.scss';
import {Link} from 'react-router-dom';


const Links =[
{
   text:"Home",
   to:"/",
},
{
   text:"Contact",
   to:"/contact",

},

]

function Nav(){
return(
   <div>
       <ul >
          {

              Links.map((item) => (

                 <li className='nav-list' key={item.to}> <Link to={item.to}> {item.text} </Link></li>


              )
         ) }
       </ul>
   </div>

)

};

export default Nav;