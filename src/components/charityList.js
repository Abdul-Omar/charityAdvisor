import React, { Component } from 'react';
import '../Nav.css';
import './charityList.css';
import Charity from './Charity'

var list = [];
class CharityList extends React.Component {

   

     render(){

     	let  list = this.props.data;

     	//console.log(this.props.data);
		return (
			    <div>
		         <div className=" b--dark-green charityList">
          			<span className="charityListText"> CharityList</span>
          			 <div>
          				{list.map((charity, index) => 

          					<ul> 
	          					<li key={index}> {charity.charityName}</li> 
          					</ul>
          				)}
          			</div>
         		 </div>

         		</div>
		);
     }
}
export default CharityList;
