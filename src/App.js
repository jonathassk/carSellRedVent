import React, { Component } from "react";
import "./App.css";
import Item from './Components/item';
import ItemSemErros from './Components/ItemSemErros'

export function makeTextWithMistakes(text, mistakes) {
     const paragraphs = text.split("\n");
     const certos = [];
     const erros = [];
     const unidos = [];
     const final = [];

   if(mistakes.length === 0){
      return [paragraphs]
   }

   for(var x = 0; x < mistakes.length; x++){ //separando palavras corretas de erradas
   //if para adicionar valores corretos na 
      const y = mistakes[x].paragraph;
      if((typeof mistakes[x-1] !== 'undefined') && (mistakes[x].paragraph !== mistakes[x-1].paragraph)){ //condicional 
            certos[x] = paragraphs[y-1]
               .slice(mistakes[x-1].end, paragraphs[y-1].length) //valor final da linha anterior 
               .concat('',paragraphs[mistakes[x].paragraph].slice(0, mistakes[x].start)) // adição de valores da nova linha 
         } else if(x === 0) { //primeiro valor do texto
            certos[x] = paragraphs[mistakes[x].paragraph]
               .slice(0, mistakes[x].start );
         } else { //outros casos
            certos[x] = paragraphs[mistakes[x].paragraph]
               .slice(mistakes[x-1].end, mistakes[x].start - 1);
         }
      erros[x] = ''.concat(paragraphs[mistakes[x].paragraph].slice(mistakes[x].start, mistakes[x].end));
   }

   //condicionais abaixo feitas apenas para arrumar bug que deixava uma
   if(typeof certos[mistakes.length] === 'undefined'){
      certos[mistakes.length] = ''
   }
   if(typeof erros[mistakes.length] === 'undefined'){
      erros[mistakes.length] = ''
   }

   if(mistakes[mistakes.length-1].end !== paragraphs[paragraphs.length - 1].length){ //adicionar valor caso o texto acabe com acerto
      if(mistakes[mistakes.length - 1].paragraph === paragraphs.length-1){ //caso seja o ultimo paragrafo
         certos[mistakes.length] = ''.concat(paragraphs[paragraphs.length-1].slice((mistakes[mistakes.length-1].end),paragraphs[paragraphs.length-1].length));
      } else { //caso tenha outro paragrafo sem erros 
         certos[mistakes.length] = paragraphs[paragraphs.length-2]
            .slice(mistakes[mistakes.length-1].end, paragraphs[paragraphs.length-2].length) 
            .concat('', paragraphs[paragraphs.length-1].slice(0,paragraphs[paragraphs.length-1].length))
      }
      erros[mistakes.length] = '';   
   }

   for(x = 0; x < mistakes.length + 1; x++){ //unindo novamente para dar split e separar oficialmente, porem no mesmo array
      unidos[x] = ''.concat(certos[x],'...',erros[x]); 
      final[x] = unidos[x].split("...")
   };

   const jsonFinal = final.map(item => JSON.parse(JSON.stringify(item))) //transformando array em json e tirando aspas do valor
return [jsonFinal];
}

class App extends Component {
   constructor(){
      super();
      this.state = ({
         name: '',
         visible: true,
      }) 
   }

   handleClick(){
      this.setState({
         name: document.getElementById("nameState").value,
         visible: false,
      })   
   }


   render() {
      const text = "Meu texto está erado\nSegundo palagrafo\n";
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

      const [result] = makeTextWithMistakes(text, mistakes);
      const qt = mistakes.length; 

      return (
         <React.Fragment>
         <div className="header">
            <p className="headerP">bem vindo {this.state.name}</p>
         </div>
         {this.state.visible === true &&
         <div id="center">
            <div id="nome">
               <p>digite seu nome aqui</p>
               <input type="text" id="nameState"/>
               <button type="submit" onClick={this.handleClick.bind(this)}>submit</button>
            </div>
         </div>
         }
            <div className="divPrincipal">
               {mistakes.length >= 1 ? 
                  result.map((item, key) => <div key={key} ><Item key={key} rigth={item[0]} wrong={item[1]}/><br /></div>)
               :
               mistakes.length === 0 && result.map((item, key) => <ItemSemErros key={key} correto={item}/>)
               } 
               <center>
               <div className="qtDiv"><p className="qtP">você errou apenas <em> {qt} </em> vezes, parabens, continue assim!!</p></div>
               </center>
            </div>

         </React.Fragment>
      );
   }
}

export default App;
