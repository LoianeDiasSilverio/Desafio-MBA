import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import SegundoDesafioRender from "./segundo_desafio_render";

class SegundoDesafio extends Component {

  navegar = () => {
    const { navigation } = this.props;
    navigation.navigate("SegundoDesafio");
  };

  render() {
    return <SegundoDesafioRender {...this.state} navegar={this.navegar} />;
    
  }
}


export default SegundoDesafio;

