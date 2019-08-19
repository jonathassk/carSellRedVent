import React from 'react';
import './final.css'
import {MyContext} from '../../context';

function final(){
	const Context = React.useContext(MyContext);

	return(
		<div className="finalDiv">
			<div>
				<img className="photoFinal" src={Context.photoFinal} alt="car result page"/>
			</div>
			<div className="infoFinal">
				<p className="inline finalTitle">your Model</p><p className="red inline finalTitle"> R</p>
				<div className="categoriesFinal">
					<p className="inline nomargin">Starting Price</p>
					<p className="inline nomargin">{Context.SP}</p>
				</div>
				<hr />
				<div className="categoriesFinal">
					<p className="inline nomargin">{Context.engineChosed} - {Context.kwh} kwh - {Context.miles} Miles Range</p>
					<p className="red nomargin"> {Context.enginePrice}</p>
				</div>
				<div className="categoriesFinal">
					<p className="nomargin">{Context.colorChosed}</p>
					<p className="red nomargin"> {Context.colorValue}</p>
				</div>
				<div className="categoriesFinal">
					<p className="nomargin">{Context.wheelChosed}</p>
					<p className="red nomargin"> {Context.wheelValue}</p>
				</div>
				<hr />
				<div className="categoriesFinal">
					<p className="nomargin pFinalValue">Final Price</p>
					<p className="red nomargin pFinalValue">+$ {Context.price}</p>
				</div>
				<p onClick={Context.restart}>REBUILD</p>
			</div>
		</div>
	);
}

export default final;