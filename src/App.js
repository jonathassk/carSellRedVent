import React, { Fragment } from 'react';
import Provider from './context'

import NavBar from './pages/navbar/navbar';
import Body from './pages/body';
import Footer from './pages/navbar/footer';
import './App.css';

export default function App(){

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
                  <Footer />
                </footer>
               </div>
            </Fragment>
         </Provider>
    );
}

