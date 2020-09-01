import React, { Component } from 'react';
import {TablaPedido} from './components/order'

function Barra() {
  return (
    <div className="nabvar  bg-primary text-white text-center p-2 mb-3">
      <div className="navbar-brand">
      Calculadora de masa
      </div>
      <div className="nav">
        <a className="nav-link btn btn-info text-white mr-3" href="/">Calculadora</a>
        <a className="nav-link btn btn-info text-white mr-3" href="/">Recetas</a>
      </div>
    </div>)
}

export class Ingredientes extends Component {
  render = () => 
    <div className="container-fluid">
      <h4>tabla muestra resultado, ingredientes y peso para cada masa</h4>
    </div>
}

export default class App extends Component {  
  render = () => 
          <div>
            <Barra />        
            <TablaPedido />
            <hr></hr>
            <Ingredientes />
          </div>    
}
