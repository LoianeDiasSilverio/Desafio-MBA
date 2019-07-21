import React, { Component } from "react";
import PrimeiroDesafioRender from "./primeiro_desafio_render";

class PrimeiroDesafio extends Component {

  navegar = () => {
    const { navigation } = this.props;
    navigation.navigate("PrimeiroDesafio");
  };

  render() {
    return <PrimeiroDesafioRender {...this.state} navegar={this.navegar}/>;
    
  }
}


export default PrimeiroDesafio;

