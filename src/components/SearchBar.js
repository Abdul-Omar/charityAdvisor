import React, { Component } from 'react';
import '../Nav.css';


const url = new URL('https://cors-anywhere.herokuapp.com/https://api.data.charitynavigator.org/v2/Organizations');

class SearchBar extends React.Component {

  constructor(props) {
	    super(props);
	    this.state = {
	      data: []
	    }
    }
    
    onSubmitSearch = () => {

    	    var params = {app_id: 'b8cb661c', app_key: 'b55d0a5d26c6fad893f91244e7229e4b', zip:"92105"} // or:
			//var params = [['lat', '35.696233'], ['long', '139.570431']]

			url.search = new URLSearchParams(params).toString();
	    fetch(url)
	      .then(response => response.json())
	      .then(data => {

	      	for(var element in data){

	      		if(element.charityName == "Religious Science Church Center of San Diego" ) 
	      			  console.log("hello");
	      	}
	      
	      })
  }
	
	render(){
		return (
			<div>
				<form className=" flex search pt5 black-80 ">
				  <div className="measure">
				    <label for="name" class="f6 b db mb2">Search Charities Nearby. Input Your Zip Code <span class="normal black-60"></span></label>
				    <input id="name" class="input-reset ba b--black-20 pa2 pl4 mb2 db w-300" type="text"/>
				    <a  onClick={this.onSubmitSearch} className="buttonn w-70 f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green" href="#0">Go!</a>
				  </div>
				</form>
			</div>
		);
	}
}
export default SearchBar