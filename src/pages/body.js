import React, {useContext} from 'react';
import {MyContext} from '../context';
import FirstPage from './navbar/firstPage'
import Engine from './engine/engine';
import Color from './color/color';

function Body (){
const Context = useContext(MyContext);
return(
	<div>
		{Context.page === 0 && <FirstPage />}
		{Context.page === 1 && <Engine />}
		{Context.page === 2 && <Color />}
		{Context.page === 3 && <Engine />}
	</div>
);
}

export default Body;