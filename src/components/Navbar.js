
import React from 'react';
import 'tachyons';
import '../Nav.css'
const Navbar = ({onRouteChange}) =>{

return (
     <nav className="bg-dark-green w-100 top-bar fixed mt0 pa3">    
         <ul className="main-nav dark-gray f6 fw6 ttu tracked ">
            <li> <a  onClick={() => onRouteChange('Home')} className=" link dim white  dib mr3" href="#home" title="Home">Home</a> </li>
        </ul>
     </nav>
  );
}

export default Navbar;