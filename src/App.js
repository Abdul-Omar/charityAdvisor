import React, { Component } from 'react';
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import SlideShow from './components/SlideShow'
import CharityList from './components/CharityList'
import './App.css';
import './Nav.css'
import './Slide.css';
import food from './Images/food.svg';


const initialState = {
  input: '',
  route:'Home',
  hideSlideShow: false,
  list:[]
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;

    this.getDataFromSearchBar = this.getDataFromSearchBar.bind(this);
  }

   onRouteChange = (route) => {
    if( route == "Home"){
      this.setState({route: "Home"});
    }
    else if( route == "Search"){
      this.setState({route: "Search"});
    }
    else
      this.setState({route: route});

  }

   getDataFromSearchBar = (data, hideSlideShow) => {
       
       this.setState({list:data, hideSlideShow:true});

       //console.log(this.state.list);

  }

  render() {

           const {route} = this.state;
 
    return (

            <div className="App flex">
              <Navbar onRouteChange= { this.onRouteChange}> </Navbar> 

              {route === "Home"? 
                  <div className=" flex flex-wrap"> 
                    <div className="center mt7 w-30 pa0">
                       <h1 className="light-red dark-green orange fw6">  Let's fight food waste together and help those in need in the process.</h1>
                      <h3 className="light-red fw3 dark-green orange">
                          Every day, thousands of pounds of perfectly good food 
                          is wasted in the hotel/Restaurant industry while
                          thousands of needy people go hungry.
                          We want to solve this problem by
                          giving you a chance to connect instantly with 
                          charities nearby who could 
                          distribute this food to deserving people!
                      </h3>

                      <button className="link  h-20 grow  w-20 white f6 pointer dim bg-dark-green br-pill"  onClick={() => this.onRouteChange('Search')}  >  Let's Go! </button>
                  </div>

                  <img className=" o-75 flex h5 center mt7" src={food}/>
              </div>
              :
              <div className ="center mt7 w-300" >
                 <SearchBar getData={this.getDataFromSearchBar}/>
                <CharityList data={this.state.list}/>
              </div>

            } 
        </div>
    );
  }
}

export default App;


