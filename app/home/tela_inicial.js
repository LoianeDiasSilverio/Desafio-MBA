import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import TelaInicialRender from "../home/tela_inicial_render";
import Alerts from '../utils/msgs';

class TelaInicial extends Component {

  navegarPrimeiroDesafio = () => {
    const { navigation } = this.props;
    navigation.navigate("PrimeiroDesafio");
  };

  navegarSegundoDesafio = () => {
    const { navigation } = this.props;
    navigation.navigate("SegundoDesafio");
  };

  navegarTerceiroDesafio = () => {
    const { navigation } = this.props;
    navigation.navigate("TerceiroDesafio");
  };

  navegarQuartoDesafio = () => {
    const { navigation } = this.props;
    navigation.navigate("QuartoDesafio");
  };

  render() {
    return <TelaInicialRender {...this.state} 
    navegarPrimeiroDesafio={this.navegarPrimeiroDesafio} 
    navegarSegundoDesafio={this.navegarSegundoDesafio} 
    navegarTerceiroDesafio={this.navegarTerceiroDesafio} 
    navegarQuartoDesafio={this.navegarQuartoDesafio} />;
  }
}

export default TelaInicial;
