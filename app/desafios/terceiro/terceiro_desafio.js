import React, { Component } from "react";
import TerceiroDesafioRender from "./terceiro_desafio_render";

class TerceiroDesafio extends Component {

  navegar = () => {
    const { navigation } = this.props;
    navigation.navigate("TerceiroDesafio");
  };

  render() {
    return <TerceiroDesafioRender {...this.state} navegar={this.navegar} />;
    
  }
}


export default TerceiroDesafio;

