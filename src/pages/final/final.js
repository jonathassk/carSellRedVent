import React from 'react';
import {MyContext} from '../../context';

function final(){
	const Context = React.useContext(MyContext);

	return(
		<div>
			<div className="photoFinal"><img src={Context.photoFinal} /></div>
			<div className="infoFinal">
				<p className="inline">your Model</p><p class="red inline"> R</p>
				<div>
					<p className="inline">Starting Price</p>
					<p className="inline">{Context.SP}</p>
				</div>
				<hr />
				<div>
				<div>
					<p className="inline">{Context.engineChosed}</p> - <p className="inline">{Context.kwh}</p>
					<p className="inline">{Context.miles} Miles Range</p>
				</div>
				<p className="red">+$ {Context.enginePrice}</p>
				</div>
				<div>
					<p>{Context.colorChosed}</p>
					<p className="red">+$ {Context.colorValue}</p>
				</div>
				<div>
					<p>{Context.wheelChosed}</p>
					<p className="red">+$ {Context.wheelValue}</p>
				</div>
			</div>
		</div>
	);
}

export default final;