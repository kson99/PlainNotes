import { Dimensions, StyleSheet } from "react-native";

const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    flex: 1,
  },

  titleContainer: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#F1F1F1",
  },

  categoryContainer: {
    marginTop: 10,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  category: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#F1F1F1",
  },

  noteContainer: {
    minHeight: height - 280,
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    paddingVertical: 3,
  },

  note: {
    width: "100%",
    paddingHorizontal: 5,
  },

  noteStatus: {
    marginVertical: 10,
    paddingHorizontal: 5,
  },
});

export default styles;
