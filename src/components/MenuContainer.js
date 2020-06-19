
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Menu.css';
import 'tachyons';


const MenuContainer  =  ({onRouteChange}) => {


    return (
      
      <Menu> 
        <a  className="menu-item white link pointer" onClick={() => onRouteChange('Home')}  >Home</a>
        <a  className="menu-item white link pointer" onClick={() => onRouteChange('Search')}  >Search</a>
      </Menu>

    );
}

export default MenuContainer;