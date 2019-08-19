import React, { useContext } from 'react';
import {MyContext} from '../../context';
import './color.css'
import DotBlue from '../../images/dot-blue.png'
import DotGrey from '../../images/dot-grey.png'
import DotRed from '../../images/dot-red.png'

export default function color(){
	const Context = useContext(MyContext);

	return(
		<div className="colorDiv">
			<div className="colorinfoDiv">
				<p className="ColorTitle">Color</p>
				<p className="ColorText">{Context.descColor}</p>
				<div className="optionsColorDiv">
					<img src={DotRed} alt="red option" onClick={() => Context.changeColor('red')}/>
					<img src={DotBlue} alt="blue option" onClick={() => Context.changeColor('blue')}/>
					<img src={DotGrey} alt="grey option" onClick={() => Context.changeColor('grey')}/>
				</div>
			</div>
			<div className="colorPhotoDiv">
				<img src={Context.photoColor} alt="car with selected color" className="colorImgCar"/>
				<p className="ColorType">{Context.colorChosed}</p>
				<p className="ColorType valueColor red">{Context.colorValue}</p>
			</div>
		</div>
	);
} 