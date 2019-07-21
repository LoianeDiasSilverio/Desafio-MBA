import React, { Component } from "react";
import { View, Button } from "react-native";
import Styles from './primeiro_desafio.styles';
import GaleriaUpload from "../../utils/galeria-upload/galeria_upload_render";

class PrimeiroDesafioRender extends Component {
  constructor(props) {
    super(props);
    this.state = { cpf: "" };
  }
  
  render() {
    return (
      <View style={Styles.container}>
        <Button color='#FB6849' title="Tirar Foto" onPress={() => this.props.navegarCamera()}/>
        <View style={Styles.espacamento}></View>
        <GaleriaUpload/>
      </View>
    ); 
  }
}

export default PrimeiroDesafioRender;
