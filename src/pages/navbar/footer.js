import React, { useContext } from 'react';
import {MyContext} from '../../context';
import './footer.css';


export default function Footer (){
	const Context = useContext(MyContext);

	return(
		<div>{Context && (Context.page === 0 ? <Footer1 /> : <Footer2 />) }</div>
	);
}

function Footer1 (){
	return(
		<div className="footer">
			<div className="zeroToHundred">
				<p className="number red">2.5</p>
				<p className="metric red">s</p><br />
				<p className="info">from 0 to 100</p>
			</div>
			<div className="miles">
				<p className="number red">420</p>
				<p className="metric red">mi</p><br />
				<p className="info">miles range</p>
			</div>
			<div className="maxSpeed">
				<p className="number red">250</p>
				<p className="metric red">mp/h</p><br />
				<p className="info">max speed</p>
			</div>
		</div>
	);
}

function Footer2() { 
	const Context = useContext(MyContext);
	return(
		<div className="footer footer2 verticalCenter">
		<div className="footerPrice">
			<p className="totalPrice nopadding nomargin greydark">total</p>
			<p className="red nopadding nomargin valorFooter">$ {Context.price}</p>
		</div>
			<p className="invisible greydark">Model R</p>
			<p className="invisible greydark">{Context.engineChosed}</p>
			<img src={Context.photoColor} className="photoFooter greydark invisible carFooter"/>
			<img src={Context.wheelPhoto} className="photoFooter greydark invisible" />
			<p onClick={Context.changePage} className="nextButton greydark">next</p>
		</div>		
	);
}