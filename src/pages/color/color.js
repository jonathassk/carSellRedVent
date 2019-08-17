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
			<div className="colorPhotoDiv">
				<img src={Context.photoColor} />
				<p>{Context.colorChosed}</p>
			</div>
			<div className="colorinfoDiv">
				<p className="ColorTitle">Color</p>
				<p className="colorText">{Context.descColor}</p>
				<div className="optionsColorDiv">
					<img src={DotRed} onClick={() => Context.changeColor('red')}/>
					<img src={DotBlue} onClick={() => Context.changeColor('blue')}/>
					<img src={DotGrey} onClick={() => Context.changeColor('grey')}/>
				</div>
			</div>
		</div>
	);
}