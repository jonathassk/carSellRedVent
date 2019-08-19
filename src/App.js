import React, { Fragment } from 'react';
import Provider from './context'

import NavBar from './pages/home/navbar';
import Body from './pages/body';
import FooterCompo from './pages/home/footer';
import './App.css';

export default class App extends React.Component{


render(){
    return(
       <Provider>
            <Fragment>
            
              <div className="Container">
                <header className="containerNav">
                  <NavBar />
                </header>
                <div className="containerBody">
                 <Body />
                </div>
                <footer>
                  <FooterCompo />
                </footer>
               </div>
            </Fragment>
         </Provider>
    );}
}

