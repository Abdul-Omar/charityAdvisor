
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Menu.css';
import 'tachyons';


class MenuContainer  extends React.Component {

   constructor(props){

    super(props);
    this.state = {
      menuOpen: false
    }
  }

    // This keeps your state in sync with the opening/closing of the menu
    // via the default means, e.g. clicking the X, pressing the ESC key etc.
    handleStateChange (state) {
      this.setState({menuOpen: state.isOpen});
    }
    
    // This can be used to close the menu, e.g. when a user clicks a menu item
    closeMenu () {
      this.setState({menuOpen: false});
    }


    render(){

        const{onRouteChange} = this.props;
        return (
          
          <Menu

              isOpen={this.state.menuOpen}
              onStateChange={(state) => this.handleStateChange(state)}
          > 
            <a  className="menu-item white link pointer" onClick={() => {onRouteChange('Home'); this.closeMenu();}} >Home</a>
            <a  className="menu-item white link pointer" onClick={() => {onRouteChange('Search'); this.closeMenu();}}>Search</a>
          </Menu>

        );
    }
}

export default MenuContainer;