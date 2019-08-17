import React,{useContext} from 'react';
import {MyContext} from '../../context';
import tesla from '../../images/car-home.png';
import Arrow from '../../images/arrow.svg';
import './firstPage.css';

export default function homePage(){
const Context = useContext(MyContext);

	return(
		<div className="bodyContainer">
    		<p className="buildYour">Build your</p>
    		<p className="CarName">MODEL </p><p className="CarName red">R</p>
    		<img src={tesla} className="car" alt="carPhoto"/>
    		<p className="begin" onClick={Context.changePage}>BEGIN</p> <img src={Arrow} className="arrow" alt="arrow Begin button"/>    		
    	</div>
	);	
}

