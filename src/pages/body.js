import React, {useContext} from 'react';
import {MyContext} from '../context';
import FirstPage from './home/firstPage'
import Engine from './engine/engine';
import Wheels from './wheels/wheels'
import Color from './color/color';
import Final from './final/final';

function Body (){
const Context = useContext(MyContext);
return(
	<div>
		{Context.page === 0 && <FirstPage />}
		{Context.page === 1 && <Engine />}
		{Context.page === 2 && <Color />}
		{Context.page === 3 && <Wheels />}
		{Context.page === 4 && <Final />}
	</div>
);
}

export default Body;