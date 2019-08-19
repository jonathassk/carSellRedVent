import React, {Component} from 'react';
import photo1 from './images/1.png';
import photo2 from './images/2.png';
import photo3 from './images/3.png';
import photo4 from './images/4.png';
import photo5 from './images/5.png';
import photo6 from './images/6.png';
import photo7 from './images/7.png';
import photo8 from './images/8.png';
import photo9 from './images/9.png';
import final4 from './images/final-4.png';
import final5 from './images/final-5.png';
import final6 from './images/final-6.png';

export const MyContext = React.createContext();

export default class Container extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      //engine
      engineType: 'P',
      engineTypeID: 0,
      photo: photo1,
      enginePrice: 'included',
      //color
      photoColor: photo4,
      colorValue: 'included',
      //wheel
      wheelPhoto: photo7,
      wheelValue: 'included',
      //acima valores iniciais do produto escolhido
      engine: [],
      photoFinal: final4,
      //efeitos visuais
      opcWheel2: 'opacity50',
      opcWheel3: 'opacity50',
      //funções
      changePage: () => this.setState(actualPage => ({page: actualPage.page + 1, currentPrice: this.state.price})),
      testeclick: (types) => this.changeValueEngine(types),
      changeColor: (color) => this.changeColor(color),
      changeWheels: (wheels) => this.changeWheels(wheels),
      restart: () => this.restart(),
    }
  } 
//reiniciar processo de compra
  restart(){
    this.setState({
      page: 0,
      price: this.state.SP,
      currentPrice: 0,
      photoColor: photo4,
      wheelPhoto: photo7,
      photo: photo1,
      wheelValue: '$ included',
      colorValue: '$ included',
      enginePrice: '$ included',
    })
  }

// mudança de motor
  changeTypeEngine(types){
    if(types === "P"){
      this.setState({engineTypeID: 0, photo: photo1,})
    } else if(types === "S"){
      this.setState({engineTypeID: 1, photo: photo2,})
    } else {
      this.setState({engineTypeID: 2, photo: photo3,})
    }
  }
  async changeValueEngine(types){
    await this.changeTypeEngine(types); //definir state para fazer a modificação dos dados (função acima)
    this.setState({
      enginePrice: '+ $' + this.state.engine[this.state.engineTypeID].price,
      miles: this.state.engine[this.state.engineTypeID].range,
      kwh: this.state.engine[this.state.engineTypeID].kwh,
      engineType: this.state.engine[this.state.engineTypeID].type,
      price: this.state.currentPrice + this.state.engine[this.state.engineTypeID].price,
      engineChosed: this.state.engine[this.state.engineTypeID].kwh + this.state.engine[this.state.engineTypeID].type,
    });
  }
// mudança de cor
  changeColorType(color){
    if(color === "red"){
      this.setState({colorTypeID: 0, photoColor: photo4, photoFinal: final4,})
    } else if(color === "blue"){
      this.setState({colorTypeID: 1, photoColor: photo5, photoFinal: final5,})
    } else {
      this.setState({colorTypeID: 2, photoColor: photo6, photoFinal: final6,})
    }
  }

  async changeColor(color){
    await this.changeColorType(color);
    this.setState({
      colorValue: '+ $' + this.state.color[this.state.colorTypeID].price,
      colorChosed: this.state.color[this.state.colorTypeID].label,
      price: this.state.currentPrice + this.state.color[this.state.colorTypeID].price,
    })
  }
// mudança de rodas
  changeWheelType(wheelID){
    if (wheelID === 7){
      this.setState({wheelTypeID: 0, wheelPhoto: photo7, opcWheel1: 'opacity100', opcWheel2: 'opacity50', opcWheel3: 'opacity50'})
    } else if (wheelID === 8){
      this.setState({wheelTypeID: 1, wheelPhoto: photo8, opcWheel1: 'opacity50', opcWheel2: 'opacity100', opcWheel3: 'opacity50'})
    } else {
      this.setState({wheelTypeID: 2, wheelPhoto: photo9, opcWheel1: 'opacity50', opcWheel2: 'opacity50', opcWheel3: 'opacity100'})
    }
  }

  async changeWheels(wheelID){
    await this.changeWheelType(wheelID);
    this.setState({
      wheelValue: '+ $' + this.state.wheels[this.state.wheelTypeID].price,
      price: this.state.currentPrice + this.state.wheels[this.state.wheelTypeID].price,
      wheelChosed: this.state.wheels[this.state.wheelTypeID].label,
    })
  }



// requisição de dados do API ao ter componente montado
  async componentDidMount(){  
    await fetch('https://next.json-generator.com/api/json/get/41ORKNZDU')
    .then(response => response.json())
      .then(data => {this.setState({
        price: data.data.price, 
        currentPrice: data.data.price,
        engine: data.data.engine.items,
        descColor: data.data.color.description,
        color: data.data.color.items,
        wheels: data.data.wheels.items,
        SP: data.data.price,
      }); 
    })
    this.setState({
       engineChosed: this.state.engine[0].kwh + this.state.engine[0].type,
       colorChosed: this.state.color[0].label,
       wheelChosed: this.state.wheels[0].label,
    })
  }
// Provider do context API
  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}