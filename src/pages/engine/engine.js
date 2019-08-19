import React, { Component, useContext} from 'react';
import {MyContext} from '../../context';
import './engine.css'

export default function Engine(){
const Context = useContext(MyContext);
		return(
			<div>
				{!Context ? 'carregando':
				  <div className="enginePrincipal">
				    <div className="enginePhoto">	
				    	<img src={Context.photo} className="imgCar" alt="carEngineType"/>
				    </div>
				    <div className="engineData">
				    <p className="titleEngine">Engine</p>
						{Context.engine.map(item => <ItemPage type={item.type} key={item.id} id={item.id} kwh={item.kwh} range={item.range}/>)}
				    </div>
				 	</div>
				}
			</div>
		);

}

class ItemPage extends Component{
static contextType = MyContext;
constructor(props){
	super(props);
	this.state = ({
		engineOpacityBar: '',
	})
}

render(){
	return(			
		<div className={`engineOption`}>  
			<div><p className="engineOptionText">{this.props.kwh}</p><p className="engineOptionText red">{this.props.type}</p></div>
			<div><p className="enginekwh inline">{this.props.kwh}</p><p className="inline"> kwh</p></div>
			<div><p className="enginekwh inline">{this.props.range}</p><p className="inline"> miles range</p></div>
			<button className="circleButton" onClick={() => {this.context.testeclick(this.props.type); this.handleClick();}}></button>
		</div>
	);
}
}
 