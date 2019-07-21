import React, { Component } from "react";
import PrimeiroDesafioRender from "./primeiro_desafio_render";

class PrimeiroDesafio extends Component {

  navegarCamera = () => {
    const { navigation } = this.props;
    navigation.navigate("Camera");
  };

  navegarGaleriaUpload = () => {
    const { navigation } = this.props;
    navigation.navigate("GaleriaUpload");
  };

  render() {
    return <PrimeiroDesafioRender {...this.state} navegarCamera={this.navegarCamera} navegarGaleriaUpload={this.navegarGaleriaUpload}/>;
  }
}


export default PrimeiroDesafio;

