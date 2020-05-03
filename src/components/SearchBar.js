import React, { Component } from 'react';
import '../Nav.css'
const SearchBar = ()=>{

	return(
		<div>
			<form className=" flex search pt7 black-80 ">
			  <div className="measure">
			    <label for="name" class="f6 b db mb2">Search Charities Nearby <span class="normal black-60"></span></label>
			    <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text"/>
			      <a class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green" href="#0">Go!</a>
			  </div>
			</form>
		</div>
	);
}
export default SearchBar