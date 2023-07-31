import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 170,
    backgroundColor: "#f1f1f1",
    borderRadius: 20,
    margin: 5,
    padding: 10,
    position: "relative",
  },

  title: {
    fontWeight: "500",
  },

  note: {
    marginTop: 10,
    fontWeight: "300",
    fontSize: 12,
  },

  time: {
    fontWeight: "300",
    fontSize: 11,
    color: "grey",
    marginTop: 10,
  },
});

export default styles;
