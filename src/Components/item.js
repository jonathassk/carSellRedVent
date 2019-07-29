import React, { Component } from 'react';

class Item extends Component {


	render(){
		return(<div><h1>{this.props.correto}</h1><h2>{this.props.errado}</h2></div>);
	}
}

export default Item;