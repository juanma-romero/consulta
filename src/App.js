import React, { Component } from 'react';

function Barra() {
  return (
    <div className="nabvar  bg-primary text-white text-center p-2 mb-3">
      <div className="navbar-brand">
      Calculadora de masa
      </div>
      <div className="nav">
        <a className="nav-link btn btn-info text-white mr-3" href="/">Calculadora</a>
        <a className="nav-link btn btn-info text-white mr-3" href="#">Recetas</a>
      </div>
    </div>)
}

export class Pedido extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      masaSeleccionada: "",
      gramosBollo: null,
      cantidadBollos: null,
      totalMasaPedido: null
    }
  }

  agregaLineaPedido = () => {
    //this.setState({ masaSeleccionada: event.target.value });
    
  }

  

  render = () =>
  <div className="container-fluid"> 
    <form>
      <div>
      <label htmlFor="masaSeleccionada">Seleccione tipo de masa:</label>
        <select id="masaSeleccionada" name="masaSeleccionada">
          <option value="viena">Viena</option>
          <option value="brioche">Brioche</option>
          <option value="muffin">Muffin</option>
          <option value="pizza">Pizza</option>
        </select>
      </div>
      <div>
      <label htmlFor="gramosBollo">Gramos de cada bollo:</label>
        <input className="d-inline-flex" name="gramosBollo"></input>
      </div>
      <div>
      <label htmlFor="cantidadBollos">Cantidad bollos:</label>
        <input className="d-inline-flex" name="cantidadBollos"></input>
        <h6>masa yyyy necesaria, xxx gramos</h6>
      </div>
      <button className="btn btn-primary" onClick={ this.agregaLineaPedido }>Agregar</button>
      
    </form>
    <hr></hr>
    
  </div>
}

export class Ingredientes extends Component {
  render = () => <h4>tabla muestra ingredientes y peso para cada masa</h4>
}


export default class App extends Component {  
  render = () => 
          <div>
            <Barra />        
            <Pedido>          
            </Pedido>
            <hr></hr>
            <Ingredientes>
              
            </Ingredientes>
          </div>    
}
/*  original de create-react-app

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
