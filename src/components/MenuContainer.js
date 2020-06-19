
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Menu.css';
import 'tachyons';


const MenuContainer  =  ({onRouteChange}) => {


    return (
      
      <Menu> 
        <a  className="menu-item white" onClick={() => onRouteChange('Home')} href="/Home">Home</a>
         </Menu>

    );
}

export default MenuContainer;