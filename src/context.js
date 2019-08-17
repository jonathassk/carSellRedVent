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
      engineType: 'P',
      photo: photo1,
      restart: () => this.restart,
      colorValue: 0,
      photoColor: photo4,
      engine: [],
      enginePrice: 0,
      engineChosed: '',
      colorChosed: '',
      wheelChoser: photo7,
      changePage: () => this.setState(actualPage => ({page: actualPage.page + 1, currentPrice: this.state.price})),
      testeclick: (types) => this.changeValueEngine(types),
      changeColor: (color) => this.changeColor(color),
      changeWheels: (wheels) => this.changeWheels(wheels),
    }
  } 

  restart(){
    this.setState({
      page: 0,
      price: this.state.SP,
      currentPrice: 0,
    })
  }

  changeValueEngine(types){
    if(types === "P") {
      this.setState({
        enginePrice: this.state.engine[0].price,
        miles: this.state.engine[0].range,
        kwh: this.state.engine[0].kwh,
        engineType: 'P',
        price: this.state.currentPrice + this.state.engine[0].price,
        engineChosed: this.state.engine[0].kwh + this.state.engine[0].type,
        photo: photo1,
      });
    } else if(types === "S") {
      this.setState({
        engineType: 'S',
        enginePrice: this.state.engine[0].price,
        miles: this.state.engine[0].range,
        price: this.state.currentPrice + this.state.engine[1].price, 
        engineChosed: this.state.engine[1].kwh + this.state.engine[1].type,
        photo: photo2,
      });

    } else {
      this.setState({
        engineType: 'B',
        enginePrice: this.state.engine[0].price,
        miles: this.state.engine[0].range,
        price: this.state.currentPrice + this.state.engine[2].price,
        engineChosed: this.state.engine[2].kwh + this.state.engine[2].type,
        photo: photo3,
      });
    }
  }

  changeColor(color){
    if(color === 'red'){
      this.setState({
        colorValue: this.state.color[0].price,
        colorChosed: this.state.color[0].label,
        price: this.state.currentPrice + this.state.color[0].price,
        photoColor: photo4,
        photoFinal: final4,
      })
    } else if(color === 'blue'){
      this.setState({
        colorChosed: this.state.color[1].label,
        colorValue: this.state.color[1].price,
        price: this.state.currentPrice + this.state.color[1].price,
        photoColor: photo5,
        photoFinal: final5,
      })
    } else {
      this.setState({
        colorChosed: this.state.color[2].label,
        colorValue: this.state.color[2].price,
        price: this.state.currentPrice + this.state.color[2].price,
        photoColor: photo6,
        photoFinal: final6,
      })
    }
  }

  changeWheels(wheels){
    if(wheels === 7){
      this.setState({
        wheelValue: this.state.wheels[0].price,
        price: this.state.currentPrice + this.state.wheels[0].price,
        wheelChosed: this.state.wheels[0].label,
        wheelPhoto: photo7,
      })
    } else if (wheels === 8){
      this.setState({
        wheelValue: this.state.wheels[1].price,
        price: this.state.currentPrice + this.state.wheels[1].price,
        wheelChosed: this.state.wheels[1].label,
        wheelPhoto: photo8,
      })
    } else {
      this.setState({
        wheelValue: this.state.wheels[2].price,
        price: this.state.currentPrice + this.state.wheels[2].price,
        wheelChosed: this.state.wheels[2].label,
        wheelPhoto: photo9,
      })
    }
  }

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
  
  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}