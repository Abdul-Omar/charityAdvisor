import React, { Component } from 'react';
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import SlideShow from './components/SlideShow'
import './App.css';
import './Nav.css'
import './Slide.css';



const initialState = {
  input: ''
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

   onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } 
    this.setState({route: route});
  }

  render() {
   
    return (

        <div>
            <div className="App flex">
              <Navbar> </Navbar> 
              <h3 className="light-red dark-green orange mt5">
                  Every day, thousands of pounds of perfectly good food 
                  is wasted in the hotel/Restaurant industry while
                  thousands of needy people go hungry.
                  We want to solve this problem by
                  giving you a chance to connect instantly with 
                  charities nearby who could 
                  distribute this food to deserving people!
              </h3>

          </div>
          <div className="center">
          
              <SearchBar> </SearchBar>
          </div>
          <div> <SlideShow/> </div>
        </div>

        
    );
  }
}

export default App;

