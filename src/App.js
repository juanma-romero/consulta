import React, { Component } from 'react';

export class Barra extends Component {
  render = () =>
    <div className="nabvar">
      <h4 className="bg-primary text-white text-center p-2">
      Calculadora de masa
      </h4>
      <div className="nav">
        <a className="nav-link" href="/">Calculadora</a>
        <a className="nav-link" href="#">Recetas</a>
      </div>
    </div>
}

export class Pedido extends Component {
  gramosBollo; cantidadBollos

  render = () =>
  <div> 
    <form>
      <label htmlFor="tipoMasa">Seleccione tipo de masa:</label>
      <select id="tipoMasa" name="tipoMasa">
        <option value="viena">Viena</option>
        <option value="brioche">Brioche</option>
        <option value="muffin">Muffin</option>
        <option value="pizza">Pizza</option>
      </select>
      <label htmlFor="gramosBollo">Gramos de cada bollo:</label>
      <input name="gramosBollo"></input>
      <label htmlFor="cantidadBollos">Cantidad bollos:</label>
      <input name="cantidadBollos"></input>
      <button type="submit">Agregar</button>
      <h6>masa necesaria { this.gramosBollo * this.cantidadBollos} gramos</h6>
    </form>
    <hr></hr>
    //tabla formando pedido
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
              // tabla muestra ingredientes y peso para cada masa
            </Ingredientes>
          </div>    
}
















//import logo from './logo.svg';
//import './App.css';

/*
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
