import { Stack, useRouter } from "expo-router";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { HeaderButton } from "../../components";
import styles from "./addNote.style";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { addNoteDB } from "../../database/sqlite.service";

const AddNote = () => {
  const router = useRouter();
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  let charCount = category.length + title.length + note.length;

  const getDateNow = () => {
    const day = new Date().getDate();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[new Date().getMonth()];
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();

    return `${new Date().getFullYear()}, ${month} ${day}, ${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
  };

  const addNote = async () => {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let timestamp = `${new Date().getFullYear()}, ${
      days[new Date().getDay() - 1]
    }, ${getDateNow()}`;

    try {
      await addNoteDB(title, category, timestamp, note, charCount);
      router.back();
    } catch (error) {
      Alert("Failed, try again");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Screen
        options={{
          headerLeft: () => (
            <HeaderButton
              iconName={"chevron-back"}
              size={30}
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
          headerShadowVisible: false,
          headerRight: () => (
            <HeaderButton
              iconName={"checkmark-sharp"}
              size={30}
              handlePress={() => addNote()}
            />
          ),
        }}
      />

      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <TextInput
            style={styles.title}
            placeholder="Title..."
            onChangeText={(text) => setTitle(text)}
          />
        </View>

        <View style={styles.categoryContainer}>
          <TextInput
            style={styles.category}
            placeholder="Category..."
            onChangeText={(text) => setCategory(text)}
          />
          {/* <Picker>
            <Picker.Item label="- - Categories - -" value="default" />
          </Picker> */}
        </View>

        <Text style={styles.noteStatus}>{`${getDateNow()}`}</Text>

        <View style={styles.noteContainer}>
          <TextInput
            style={styles.note}
            placeholder="Start typing..."
            multiline={true}
            onChangeText={(text) => setNote(text)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNote;
