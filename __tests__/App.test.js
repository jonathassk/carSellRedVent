import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';
import NavBar from '../src/pages/navbar/navbar';
import Footer from '../src/pages/navbar/footer';
import FirstPage from '../src/pages/navbar/firstPage';

describe('testing components rendering', () => {
	it('App Component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toMatchSnapshot();
	});
	it('- NavBar Component', () => {
		const wrapper = shallow(<NavBar />);
		expect(wrapper).toMatchSnapshot();
	});
	it('- Footer Component', () => {
		const wrapper = shallow(<Footer />);
		expect(wrapper).toMatchSnapshot();
	});
	it('- FirstPage Component', () => {
		const wrapper = shallow(<FirstPage />);
		expect(wrapper).toMatchSnapshot();
	});
});
