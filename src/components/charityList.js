import React, { Component } from 'react';
import '../Nav.css';
import './charityList.css';


const url = new URL('https://cors-anywhere.herokuapp.com/https://api.data.charitynavigator.org/v2/Organizations');


class CharityList extends Component {

    constructor(props) {
        super(props);
        this.state = {
           fetching: false,
           criteria: 'zip',
           value:"",
           charityList: [],
           errorOccured:false,
           error:''

        }
    }

    componentDidMount(){

          this.setState({fetching:true})

          const {criteria, value} = this.props.data; 
          
          let params;

          if(criteria === "zip"){


             params = {app_id: 'b8cb661c', app_key: 'b55d0a5d26c6fad893f91244e7229e4b', zip:value}
          }else if( criteria === "city"){



             params = {app_id: 'b8cb661c', app_key: 'b55d0a5d26c6fad893f91244e7229e4b', city:value}
          }
          else{


            params = {app_id: 'b8cb661c', app_key: 'b55d0a5d26c6fad893f91244e7229e4b', search:value}
          }


          url.search = new URLSearchParams(params).toString();
          fetch(url)
            .then(response => response.json())
            .then(data => {

                    if (data.errorMessage){


                      this.setState({error:data.errorMessage.message})
                    }

                    else {

                         this.setState({

                              charityList:data
                         })

                    }

                    this.setState ({fetching:false});        

            })
            .catch(err=>{
              

               this.setState ({errorOccured:true});
               
            });

            
      }

        

              
     render(){

     	        let  list = this.state.charityList;
           		return (
      			    <div>
      		          <div className=" center charityList">
                  		  { 
                            this.state.fetching === true?
                              <div> <h4 className="fw4 dark-green"> Looking up nearest charities...Please Wait... </h4> </div>
                              :
                              (
                                this.state.error !== ''?
                                  <div> <p className="dark-red center"> Invalid input.{this.state.error}.Please check your input and try again.</p> </div>
                                :
                                  <div>
                                          { list.map((charity, index) => 
                       
                          	          				 <ul> 
                                                  <div className=" center dark-green">
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
                              )
                        }
                          
             
                    </div>
              </div>
      		);
     }
}
export default CharityList;
