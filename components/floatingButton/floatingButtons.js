import { Alert, TouchableOpacity } from "react-native";
import styles from "./floatingButtons.style";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Floatingbutton = () => {
  const router = useRouter();

  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          router.push(`/addNote/addNote`);
        }}
      >
        <Ionicons name="add" style={styles.icon} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Floatingbutton;
