import React, {useContext, Component} from 'react';
import {MyContext} from '../../context';
import Wheel1 from '../../images/7.png';
import Wheel2 from '../../images/8.png';
import Wheel3 from '../../images/9.png';
import './wheel.css';


export default function wheels(){
	const Context = useContext(MyContext);
	return(
		<div>
			{!Context ? '' :
			<div className="wheelDiv"> 
				<WheelOption wheelOpt={Wheel1} alt={'wheel option 1'} id={0} idDom="wheel1" opacityClass={Context.opcWheel1}/>
				<WheelOption wheelOpt={Wheel2} alt={'wheel option 2'} id={1} idDom="wheel2" opacityClass={Context.opcWheel2}/>
				<WheelOption wheelOpt={Wheel3} alt={'wheel option 3'} id={2} idDom="wheel3" opacityClass={Context.opcWheel3}/>
			</div>
			}
		</div>
	);
}

class WheelOption extends Component{
constructor(props){
	super(props);
	opacity: '';
}

static contextType = MyContext;
	render(){
		return(
			<div className={"centerwheel "+ this.props.opacityClass} onClick={this.handleClick} id={this.props.idDom}>
				<img src={this.props.wheelOpt} alt={this.props.alt} onClick={() => this.context.changeWheels(this.context.wheels[this.props.id].id)} />
				<p className="">{this.context.wheels[this.props.id].label}</p>
				<p className="red">+$ {this.context.wheels[this.props.id].price}</p>
			</div>
		);
	}
}

