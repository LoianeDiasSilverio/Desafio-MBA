import React, { Component } from "react";
import { View, ScrollView} from "react-native";
import { Text } from "native-base";
import Styles from '../home/tela_inicial.styles';

class TelaInicialRender extends Component {
  constructor(props) {
    super(props);
    this.state = { cpf: "" };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={Styles.contentContainer}>
        <View
          style={[Styles.linearGradient, Styles.container]}
        >
          <Text style={Styles.title}>Escolha o Desafio</Text>

          <View style={Styles.card}>
          <Text style={Styles.text} onPress={() => this.props.navegarPrimeiroDesafio()}>Desafio 1 - MBAcam</Text>
          </View>

          <View style={Styles.card}>
          <Text style={Styles.text} onPress={() => this.props.navegarSegundoDesafio()}>Desafio 2 - MBAMaps</Text>
          </View>

          <View style={Styles.card}>
          <Text style={Styles.text} onPress={() => this.props.navegarTerceiroDesafio()}>Desafio 3 - App desafio</Text>
          </View>

          <View style={Styles.card}>
          <Text style={Styles.text} onPress={() => this.props.navegarQuartoDesafio()}>Desafio 4 - API</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default TelaInicialRender;
