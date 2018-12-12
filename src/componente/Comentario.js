import React, { Component } from 'react';



class Comentario extends Component {
  render() {
    return (
      <div className="tela">
       <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Comentario;