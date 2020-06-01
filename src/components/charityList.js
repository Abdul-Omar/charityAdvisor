import React, { Component } from 'react';
import '../Nav.css';

import React, { Component } from 'react';
import './charityList.css';
class charityList extends React.Component {

  constructor(props) {
	    super(props);
	    this.state = {
	      list: {}
	    }
    }
    
	
     render(){
		return (
		         <div className="charityList">
          			<span className="charityListText">&#x3C;charityList /&#x3E;</span>
         		 </div>
		);
     }
}
export default charityList;
