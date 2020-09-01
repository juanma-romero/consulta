import React, { Component } from 'react';

class PedidoRow extends Component {
  render() {
    const pedido = this.props.pedido 
    return (
      <tr>
        <td>{pedido.id}</td>
        <td>{pedido.masaSeleccionada}</td>
        <td>{pedido.gramosBollo}</td>
        <td>{pedido.cantidadBollos}</td>
        <td>{pedido.totalMasaPedido}</td>
      </tr>
    )}
}

export class TablaPedido extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pedidoUsuario:{},
      pedidoHarcoded: [
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
        gramosBollo: 500,
        cantidadBollos: 10,
        totalMasaPedido: 5000
      }]
    }
  }

  updatePedidoUsuario = (event) => {
    this.setState({ pedidoUsuario: event.target.value });
  }

  createNewLine = () => {
      this.setState({pedidoHarcoded: [...this.state.pedidoHarcoded,
                    { id: this.state.pedidoUsuario.id,
                      masaSeleccionada: this.state.pedidoUsuario.masaSeleccionada,
                      gramosBollo: this.state.pedidoUsuario.gramosBollo,
                      totalMasaPedido: this.state.pedidoUsuario.masaSeleccionada*this.state.pedidoUsuario.gramosBollo}],
                    pedidoUsuario: {}
                    })
    
  }

  render() {
    const pedidoParaTabla = this.state.pedidoHarcoded.map( pedido => 
      <PedidoRow key={pedido.id} pedido={pedido} />)
    return (
      <div className="container-fluid"> 
      <form>
        <div>
        <label htmlFor="masaSeleccionada">Seleccione tipo de masa:</label>
          <select name="masaSeleccionada" 
            value={this.state.pedidoUsuario.masaSeleccionada}
            onChange={ this.updatePedidoUsuario }>
              <option>Viena</option>
              <option>Brioche</option>
              <option>Muffin</option>
              <option>Pizza</option>
          </select>
        </div>
        <div>
        <label htmlFor="id">ID:</label>
          <input className="d-inline-flex" name="id"
           value={this.state.pedidoUsuario.id}
           onChange={ this.updatePedidoUsuario }></input>
        </div>
        <div>
        <label htmlFor="gramosBollo">Gramos de cada bollo:</label>
          <input className="d-inline-flex" name="gramosBollo"
           value={this.state.pedidoUsuario.gramosBollo}
           onChange={ this.updatePedidoUsuario }></input>
        </div>
        <div>
        <label htmlFor="cantidadBollos">Cantidad bollos:</label>
          <input className="d-inline-flex" name="cantidadBollos"
           value={this.state.pedidoUsuario.cantidadBollos}
           onChange={ this.updatePedidoUsuario }></input>
          <h6>masa yyyy necesaria, xxx gramos</h6>
        </div>
        <button className="btn btn-primary" onClick={ this.createNewLine }>Agregar</button>        
      </form>      
      <hr></hr>

      <h6> Masas y cantidades a elaborar </h6>
      <table className="bordered-table">
        <thead>
          <tr>
            <th>ID</th>
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
      <button className="btn btn-primary my-3" onClick={ this.agregaLineaPedido }>Calcular</button>
      </div>
      
    )
  }
}