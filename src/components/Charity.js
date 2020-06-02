import React, { Component } from 'react';

class Charity extends React.Component {
	
  render() {

      const data  = this.props.data;

 
  	return (

    	<div className="charity">
        <span className="charityText">&#x3C;Charity/&#x3E;</span>
        <div className="companyinfo">
          <div>Name: {data.charityName}</div>
          <div>Email: {data.email}</div>
          <div>Address: {data.mailingAddress}</div>
          <div>mission: {data.mission}</div>
        </div>
    	</div>
    );
  }
}
export default Charity;