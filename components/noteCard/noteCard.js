import { Text, TouchableOpacity } from "react-native";
import styles from "./noteCard.style";

const NoteCard = ({ item, handleNotePress, selectedNote }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleNotePress(item)}
    >
      <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
        {item.title}
      </Text>
      <Text style={styles.note} numberOfLines={3} ellipsizeMode="tail">
        {item.note}
      </Text>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );
};

export default NoteCard;
