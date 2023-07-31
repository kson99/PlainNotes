import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CategoryTabs = ({ category, handleTabPress, selected }) => {
  return (
    <TouchableOpacity
      style={styles.container(selected, category)}
      onPress={() => handleTabPress(category)}
    >
      <Text style={styles.text(selected, category)}>{category}</Text>
    </TouchableOpacity>
  );
};

export default CategoryTabs;

const styles = StyleSheet.create({
  container: (selected, category) => ({
    backgroundColor: selected == category ? "red" : "#f1f1f1",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  }),

  text: (selected, category) => ({
    paddingVertical: 10,
    paddingHorizontal: 13,
    color: selected == category ? "white" : "black",
    fontWeight: selected == category ? "bold" : "300",
  }),
});
