import React, { Component } from 'react';

class noError extends Component{
	render(){
		return(
			<div className="linha">
			<h1>{this.props.correto}</h1><br />
			</div>
		);
	}
}

export default noError;