import React, {useContext} from 'react';
import {MyContext} from '../../context';
import Wheel1 from '../../images/7.png';
import Wheel2 from '../../images/8.png';
import Wheel3 from '../../images/9.png';
import './wheel.css';

export default function wheels(){
	const Context = useContext(MyContext);

	return(
		<div className="wheelDiv">
			<div className="centerwheel">
				<img src={Wheel1} alt="wheel option 1" onClick={() => Context.changeWheels(Context.wheels[0].id)} />
				<p className="">{Context.wheels[0].label}</p>
				<p className="red">+$ {Context.wheels[0].price}</p>
			</div>
			<div className="centerwheel">
				<img src={Wheel2} alt="wheel option 2" onClick={() => Context.changeWheels(Context.wheels[1].id)} />
				<p className="">{Context.wheels[1].label}</p>
				<p className="red">+$ {Context.wheels[1].price}</p>
			</div>
			<div className="centerwheel">
				<img src={Wheel3} alt="wheel option 3" onClick={() => Context.changeWheels(Context.wheels[2].id)} />
				<p className="">{Context.wheels[2].label}</p>
				<p className="red">+$ {Context.wheels[2].price}</p>
			</div>
		</div>
	);
}