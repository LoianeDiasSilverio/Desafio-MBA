import React, { Component } from "react";
import { View, ScrollView, Dimensions, Stylesheet } from "react-native";
import { Text } from "native-base";
import Styles from './segundo_desafio.styles';

class QuartoDesafioRender extends Component {
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
          <Text style={Styles.text}>TEMAS</Text>

          <View style={Styles.card}>
            <Text />
          </View>

          <View style={Styles.card}>
            <Text />
          </View>

          <View style={Styles.card}>
            <Text />
          </View>

          <View style={Styles.card}>
            <Text />
          </View>

          <View style={Styles.card}>
            <Text />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default QuartoDesafioRender;
