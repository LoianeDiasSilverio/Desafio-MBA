import React, { Component } from "react";
import QuartoDesafioRender from "./quarto_desafio_render";

class QuartoDesafio extends Component {

  navegar = () => {
    const { navigation } = this.props;
    navigation.navigate("QuartoDesafio");
  };

  render() {
    return <QuartoDesafioRender {...this.state} navegar={this.navegar} />;
    
  }
}


export default QuartoDesafio;

