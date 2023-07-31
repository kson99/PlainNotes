import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    width: 45,
    height: 45,
    borderRadius: 100,
    backgroundColor: "red",
    position: "absolute",
    right: 25,
    bottom: 30,
  },

  button: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default styles;
