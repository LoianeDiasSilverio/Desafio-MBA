import { StyleSheet, Dimensions } from "react-native";

const Styles = StyleSheet.create({
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
    backgroundColor: "#FB6849",
    width: Dimensions.get("window").width - 30,
    padding: 20,
    borderRadius: 4
  },
  title: {
    color: "#FB6849",
    marginTop: 50,
    padding: 10,
    textAlign: "center",
    fontSize: 30,
    lineHeight: 30
  },
  text: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 20
  }
});


export default Styles;
