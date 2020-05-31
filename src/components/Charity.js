
class Charity extends React.Component {
	
  render() {
 
  	return (

          const {charity}  = this.props;
    	<div className="company">
        <span className="charityText">&#x3C;Charity/&#x3E;</span>
    	  <img src={p.avatar_url} />
        <div className="companyinfo">
          <div>Name: {charity.name}</div>
          <div>Email: {charity.email}</div>
          <div>Bio: {charity.address}</div>
        </div>
    	</div>
    );
  }
}
export default Charity;