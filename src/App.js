import React, { Component } from "react";
import "./App.css";
import Item from './Components/item';

export function makeTextWithMistakes(text, mistakes) {
  const paragraphs = text.split("\n");
  const erros = Array(mistakes.length);
  const certos = Array(mistakes.length);
  const empty = '';
  const unidos = [];
  const final = [];

  for(var x = 0; x < mistakes.length; x++){ //separando parte correta de parte errada
      certos[x] = paragraphs[x].slice(0, mistakes[x].start - 1);
      erros[x] = empty.concat(paragraphs[x].slice(mistakes[x].start, mistakes[x].end)) ;
 
  }

  for(x = 0; x < mistakes.length; x++){
    unidos[x] = empty.concat(certos[x],' ...' ,erros[x]); 
    final[x] = unidos[x].split("...")
  };


  const jsonFinal = final.map(item => JSON.parse(JSON.stringify(item)))

  return [jsonFinal];

}
class App extends Component {
  render() {
    const text = "Meu texto está erado\nSegundo palagrafo";
    const mistakes = [
      
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
    ];

    const errorqt = mistakes.length;
    
    const [errors] = makeTextWithMistakes(text, mistakes); 
    return (
      <div>
       {errors.map((item, key) => <Item key={key} correto={item[0]} errado={item[1]}/>)}
       <div>{errorqt}</div>
      </div>
    );
  }
}

export default App;
