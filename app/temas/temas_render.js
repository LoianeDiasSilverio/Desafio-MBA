import React, { Component } from "react";
import { View, ScrollView, Dimensions, StyleSheet } from "react-native";
import { Text } from "native-base";

class TemasRender extends Component {
  constructor(props) {
    super(props);
    this.state = { cpf: "" };
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View
          style={[Styles.linearGradient, Styles.container]}
        >
          <Text style={styles.text}>TEMAS</Text>

          <View style={styles.card}>
            <Text />
          </View>

          <View style={styles.card}>
            <Text />
          </View>

          <View style={styles.card}>
            <Text />
          </View>

          <View style={styles.card}>
            <Text />
          </View>

          <View style={styles.card}>
            <Text />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  contentContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  card: {
    marginTop: 10,
    backgroundColor: "white",
    width: Dimensions.get("window").width - 30,
    padding: 20,
    borderRadius: 4
  },
  text: {
    color: "white",
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    textAlign: "center",
    fontSize: 30,
    lineHeight: 30
  }
});

export default TemasRender;
