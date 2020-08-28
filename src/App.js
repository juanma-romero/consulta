import React, { Component } from 'react';

const pedidoMuestra = [
  {
    id: 1,
    masaSeleccionada: "viena",
    gramosBollo: 140,
    cantidadBollos: 100,
    totalMasaPedido: 1400
  },
  {
    id: 2,
    masaSeleccionada: "pizza",
    gramosBollo: 450,
    cantidadBollos: 10,
    totalMasaPedido: 4500
  }]

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

export class HacePedido extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      masaSeleccionada: "",
      gramosBollo: null,
      cantidadBollos: null,
      totalMasaPedido: null
    }
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

export class PedidoRow extends Component {
  render() {
    const pedido = this.props.pedido 
    return (
      <tr>
        <td>{pedido.masaSeleccionada}</td>
        <td>{pedido.gramosBollo}</td>
        <td>{pedido.cantidadBollos}</td>
        <td>{pedido.totalMasaPedido}</td>
      </tr>
    )}
}
export class TablaPedido extends Component {  
  render() {
    const pedidoParaTabla = pedidoMuestra.map( pedido => 
      <PedidoRow key={pedido.id} pedido={pedido} />)
    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Masa</th>
            <th>Gramos</th>
            <th>Cantidad</th>
            <th>Total parcial</th>
          </tr>
        </thead>
      <tbody>
      {pedidoParaTabla}
      </tbody>
      </table>
    )
  }
}

function Pedido() {
  return (
    <div>
      <HacePedido />
      <TablaPedido />
    </div>)
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
