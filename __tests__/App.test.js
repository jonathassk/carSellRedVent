import React from 'react';
import { shallow } from 'enzyme';
import App, {makeTextWithMistakes} from '../src/App';
import Item from '../src/Components/item';
import SemErro from '../src/Components/ItemSemErros';

describe('testando componentes', () => {
	it('Rendenização component app', () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toMatchSnapshot();
	});
	it('Rendenização component item com erros', () => {
		const wrapper = shallow(<Item />);
		expect(wrapper).toMatchSnapshot();
	});
	it('Rendenização component item sem erros', () => {
		const wrapper = shallow(<SemErro />);
		expect(wrapper).toMatchSnapshot();
	});
});

describe('testando o array resultante separando acertos e erros', () => {
	test('usando texto com 1 paragrafo e sem erros', () => {
		expect(makeTextWithMistakes("paragrafo 1", [])).toEqual([["paragrafo 1"]]);
	})
	test('usando texto com varios paragrafos e sem erros', () => {
		expect(makeTextWithMistakes("paragrafo 1\nparagrafo 2\nterceiro", [])).toEqual([["paragrafo 1","paragrafo 2","terceiro"]]);
	})
	test('usando texto padrão do teste', () => {
		expect(makeTextWithMistakes("Meu texto está erado\nSegundo palagrafo", [
      {
         start: 15,
         end: 20,
         paragraph: 0
      },
      {
         start: 8,
         end: 17,
         paragraph: 1
      }      
      ])).toEqual([[["Meu texto está ", "erado"],["Segundo ", "palagrafo"],["", ""]]]) //terceiro array apenas para completar e não dar undefined nos valores
	})
	test('texto apenas com erro', () => {
		expect(makeTextWithMistakes("erradu", [
      	{
         start: 0,
         end: 6,
         paragraph: 0
      	}]))
		.toEqual([[["", "erradu"],["",""]]])//apenas erro no primeiro array e o segundo com array extra para não dar undefined 
	}) //teste não funcionou, corrigir futuramente 
	test('alternando erros e acertos entre paragrafos', () => {
		expect(makeTextWithMistakes("paragrafo erru\nerru paragrafo ", [
			{start: 10,
            end: 14,
        	paragraph: 0},
        	{
        		start: 0,
           		end: 5,
        		paragraph: 1
        	}])).toEqual([[["paragrafo ", "erru"],["", "erru "],["paragrafo ",""]]]); 
        	/*primeira linha array completo por ter erro seguido de acerto
        	segundo array apenas erro por ser iniciada com erro
        	terceiro array apenas correto por ser o complemento do arquivo*/
	})
})