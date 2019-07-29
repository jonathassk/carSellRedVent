import React from 'react';
import { shallow } from 'enzyme';
import App, {makeTextWithMistakes} from '../src/App';

describe('testando component', () => {
	it('Rendenização deve ser feita', () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toMatchSnapshot();
	});
});

describe('testando separação de paragrafos ', () => {
	test('usando texto com 1 paragrafos', () => {
		expect(makeTextWithMistakes("paragrafo 1")).toEqual(["paragrafo 1"]);
	})
	test('usando texto com 2 paragrafos (texto original do arquivo)', () => {
		expect(makeTextWithMistakes("Meu texto está erado\nSegundo palagrafo")).toEqual(["Meu texto está erado", "Segundo palagrafo"]);
	})
	test('usando texto com 3 paragrafos', () => {
		expect(makeTextWithMistakes("paragrafo 1\nparagrafo 2\nparagrafo 3")).toEqual(["paragrafo 1", "paragrafo 2", "paragrafo 3"]);
	})
})