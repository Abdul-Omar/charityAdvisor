import React, { Component } from 'react';
import '../Nav.css';
import 'tachyons';
class SearchBar extends Component {

  constructor(props) {
	    super(props);
	    this.state = {
	       criteria:'zip',
	       value:"",
	       charityList: [],
	       errorOccured: false


	    }

	    this.handleChange = this.handleChange.bind(this);
	    this.handleInput = this.handleInput.bind(this);
	    this.sendDataToParent = this.sendDataToParent.bind(this);
	    this.onSubmitSearch = this.onSubmitSearch.bind(this);
    }


   handleChange = (event) =>
      this.setState({criteria: event.target.value});
   handleInput = (event) =>
      this.setState({value: event.target.value});
   
   sendDataToParent = ()=> {

   		//e.preventDefault();
   		this.props.getData(this.state.value, this.state.criteria);


   }
    onSubmitSearch = (event) => {

	
	   		 this.sendDataToParent();

	   		 console.log(this.state.value);
   		     console.log(this.state.critera);          	  

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
				  <div className = "measure">
				    <input value = {this.state.value} onChange={this.handleInput} id="name" className="input-reset ba b--black-20 pa2 pl4 mb2 " type="text"/>
				    <a  onClick  = {this.onSubmitSearch} className=" center buttonn w-70 f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green w-300" href="#0">Go!</a>
				  </div>
				</form>
			</div>
		);
	}
}
export default SearchBar