import React, { Component } from 'react';

class noError extends Component{
	render(){
		return(
			<div className="linha">
				<p>{this.props.correto}</p><br />
			</div>
		);
	}
}

export default noError;