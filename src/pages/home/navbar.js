import React, { Component } from 'react';
import Logo from '../../images/RV-logo.svg';
import './cssNavbar.css';

class Navbar extends Component{
	render(){
		return(
			<div className="containernavPrincipal">
				<nav className="ContainerNav">
					<div className="logo">
					</div>
					<div className="options">
						<button><p className="buttontextSelected">Model R</p></button>
						<button><p className="buttontext">Model IQ</p></button>
						<button><p className="buttontext">Model Mobi</p></button>
						<button><p className="buttontext">Model Charlie</p></button>
						<button><p className="buttontext">Model Italy</p></button>					
					</div>						
				</nav>
			</div>
		);
	}
}

export default Navbar;