import React, { Component } from 'react';
import '../Nav.css';
import 'tachyons';





const url = new URL('https://cors-anywhere.herokuapp.com/https://api.data.charitynavigator.org/v2/Organizations');

class SearchBar extends React.Component {

  constructor(props) {
	    super(props);
	    this.state = {
	       criteria: 'zip',
	       value:"",
	       charityList: []

	    }

	    this.handleChange = this.handleChange.bind(this);
	    this.handleInput = this.handleInput.bind(this);
	    this.sendDataToParent = this.sendDataToParent.bind(this);
    }


   handleChange = (event) =>
      this.setState({criteria: event.target.value});
   handleInput = (event) =>
      this.setState({value: event.target.value});
   
   sendDataToParent = ()=> {

   		//e.preventDefault();
   		this.props.getData(this.state.charityList);
   		//console.log(data);

   }
    onSubmitSearch = (event) => {

	     let filter="";

	    const {criteria, value} = this.state; 
	    let params;

	    if(criteria === "zip"){

	    	filter = "zip";

	    	 params = {app_id: 'b8cb661c', app_key: 'b55d0a5d26c6fad893f91244e7229e4b', zip:value}
	    }else if( criteria === "city"){

	    	  filter = "city";

	    	 params = {app_id: 'b8cb661c', app_key: 'b55d0a5d26c6fad893f91244e7229e4b', city:value}
	    }
	    else{
	    	filter = "name";

	    	params = {app_id: 'b8cb661c', app_key: 'b55d0a5d26c6fad893f91244e7229e4b', search:value}
	    }


		url.search = new URLSearchParams(params).toString();
	    fetch(url)
	      .then(response => response.json())
	      .then(data => {

	      	this.setState({

	      		charityList:data
	      	})
	      	
	      	//console.log(this.state.charityList.length);

	      	this.sendDataToParent();

	      })
    }
	
	render(){
		return (
			     <div className= "flex center">
					<form className="flex-column center search pt5 black-80">
					<div> 
				        <label>
				         Search charity by:   
				          <select  className="center fw6 w-300" criteria={this.state.criteria} onChange={this.handleChange}>
				            <option value="zip">Zip Code</option>
				            <option value="city">City</option>
				            <option value="name">Name</option>
				          </select>
				        </label>
			        </div>
				  <div className="measure">
				    <input value={this.state.value} onChange={this.handleInput} id="name" className="input-reset ba b--black-20 pa2 pl4 mb2 " type="text"/>
				    <a  onClick= {this.onSubmitSearch} className=" center buttonn w-70 f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green w-300" href="#0">Go!</a>
				  </div>
				</form>
			</div>
		);
	}
}
export default SearchBar