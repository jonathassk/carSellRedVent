import React, { Component } from 'react';

class Item extends Component {


	render(){
		return(
			<div className="linha">
				<p >{this.props.rigth} </p>
				<p className="wrong">{this.props.wrong}</p>
			</div>
		);	
	}
}

export default Item;