import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { HeaderButton } from "../../components";
import styles from "../addNote/addNote.style";
import { useEffect, useState } from "react";
import { updateNote, deleteNote } from "../../database/sqlite.service";

const ViewNote = () => {
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const params = useLocalSearchParams();
  const router = useRouter();

  const [onInput, setOnInput] = useState(0);

  // const displayNoteStatus = (date) => {
  //   const tyear = new Date().getFullYear();
  //   let tDate = "";
  //   const [year, day, month_date, time] = date.split(",");

  //   if (tyear == year) {
  //     tDate = `${month_date} ${time}`;
  //   }

  //   return tDate;
  // };

  console.log(onInput);

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
              iconName={onInput > 1 ? "save" : "trash"}
              size={30}
              handlePress={async () => {
                if (onInput > 1) {
                  //
                  await updateNote(
                    {
                      note: note === "" ? params.note : note,
                      category: category === "" ? params.category : category,
                      title: title === "" ? params.title : title,
                      charCount: params.charCount,
                    },
                    params.id
                  );
                  router.back();
                } else {
                  await deleteNote(params.id);
                  router.back();
                }
              }}
            />
          ),
        }}
      />

      <ScrollView style={styles.container}>
        <View style={styles.titleContainer}>
          <TextInput
            style={styles.title}
            defaultValue={params.title}
            onChangeText={(text) => {
              setOnInput(onInput + 1);
              setTitle(text);
            }}
          />
        </View>

        <View style={styles.categoryContainer}>
          <TextInput
            style={styles.category}
            defaultValue={params.category}
            onChangeText={(text) => {
              setOnInput(onInput + 1);
              setCategory(text);
            }}
          />
        </View>

        <Text style={styles.noteStatus}>{`${params.time}`}</Text>

        <View style={styles.noteContainer}>
          <TextInput
            style={styles.note}
            defaultValue={params.note}
            multiline={true}
            onChangeText={(text) => {
              setOnInput(onInput + 1);
              setNote(text);
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewNote;
