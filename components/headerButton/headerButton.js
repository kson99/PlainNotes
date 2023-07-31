import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styles from "./headerButton.style";

const HeaderButton = ({ iconName, size, handlePress }) => {
  return (
    <TouchableOpacity style={styles.BtnContainer} onPress={handlePress}>
      <Ionicons name={iconName} size={size} />
    </TouchableOpacity>
  );
};

export default HeaderButton;
