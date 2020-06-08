import React, { Component } from 'react';
import '../Nav.css';
import './charityList.css';
import Charity from './Charity'

var list = [];
class CharityList extends React.Component {

   

     render(){

     	let  list = this.props.data;

     	console.log(this.props.data[0]);
		return (
			    <div>
		         <div className=" charityList">
          			<span className="charityListText"> &#x3C;Charity List/&#x3E;</span>
          			 <div>
          				{list.map((charity, index) => 

          					 
	          				 <ul> 
                        <div className="dark-green">
                        <li className= "fw6 white bg-dark-green" key={index}> Name: {charity.charityName}</li> 
                        <h5>Type: {charity.irsClassification.classification}</h5> 
                        <h5> Address: {charity.mailingAddress.streetAddress1}</h5> 
                        <h5> {charity.mailingAddress.streetAddress2} </h5>
                        <h5> City: {charity.mailingAddress.city} </h5>
                         <h5> State: {charity.mailingAddress.stateOrProvince} </h5>
                        </div>


                     </ul>
          				
          				)}
          			</div>
         		 </div>

         		</div>
		);
     }
}
export default CharityList;
