import React from 'react';
import './final.css'
import {MyContext} from '../../context';

function final(){
	const Context = React.useContext(MyContext);

	return(
		<div className="finalDiv">
			<div className="photoFinal"><img src={Context.photoFinal} /></div>
			<div className="infoFinal">
				<p className="inline finalTitle">your Model</p><p className="red inline finalTitle"> R</p>
				<div className="categoriesFinal">
					<p className="inline">Starting Price</p>
					<p className="inline">{Context.SP}</p>
				</div>
				<hr />
				<div className="categoriesFinal">
				<div>
					<p className="inline">{Context.engineChosed}</p> - <p className="inline">{Context.kwh}</p>
					<p className="inline">{Context.miles} Miles Range</p>
				</div>
				<p className="red">+$ {Context.enginePrice}</p>
				</div>
				<div className="categoriesFinal">
					<p>{Context.colorChosed}</p>
					<p className="red">+$ {Context.colorValue}</p>
				</div>
				<div className="categoriesFinal">
					<p>{Context.wheelChosed}</p>
					<p className="red">+$ {Context.wheelValue}</p>
				</div>
				<p onClick={() => Context.restart}>REBUILD</p>
			</div>
		</div>
	);
}

export default final;