import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import TemasRender from "../temas/temas_render";
import Alerts from "../utils/msgs";

class Temas extends Component {

  navegar = () => {
    const { navigation } = this.props;
    navigation.navigate("Temas");
  };

  render() {
    return <TemasRender {...this.state} navegar={this.navegar} />;
    
  }
}


export default Temas;

