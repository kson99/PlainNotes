import { Stack, useRouter } from "expo-router";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { CategoryTabs, Floatingbutton, NoteCard } from "../components";
import { useEffect, useState } from "react";
import { createTable, getNotes } from "../database/sqlite.service";
import { FlatGrid } from "react-native-super-grid";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [selectedTab, setSelectedTab] = useState("All");
  const [selectedNote, setSelectedNote] = useState();
  const router = useRouter();

  useEffect(() => {
    createTable();
  }, []);

  useEffect(() => {
    getNotes(setNotes);
  });

  const getCategories = (data) => {
    let categories = ["All"];

    data.forEach((note) => {
      if (categories.indexOf(note.category) == -1) {
        categories.push(note.category);
      }
    });

    return categories;
  };

  const showItemsUnderTab = (data) => {
    let array = [];

    if (selectedTab == "All") {
      data.reverse().forEach((item) => {
        array.push(item);
      });
    } else {
      data.forEach((item) => {
        if (item.category == selectedTab) {
          array.reverse().push(item);
        }
      });
    }

    return array;
  };

  const handleNotePress = (item) => {
    router.push({ pathname: `/viewNote/${item.id}`, params: item });
    setSelectedNote(item.id);
  };

  const handleTabPress = (item) => {
    setSelectedTab(item);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Stack.Screen
        options={{
          headerTitle: "Plain Notes",
          headerShadowVisible: false,
        }}
      />

      <View style={styles.tabView}>
        <FlatList
          data={getCategories(notes)}
          renderItem={({ item }) => (
            <CategoryTabs
              category={item}
              handleTabPress={handleTabPress}
              selected={selectedTab}
            />
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: 10 }}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>

      <View style={styles.noteView}>
        <FlatGrid
          itemDimension={170}
          data={showItemsUnderTab(notes)}
          renderItem={({ item }) => (
            <NoteCard
              item={item}
              handleNotePress={handleNotePress}
              selectedNote={selectedNote}
            />
          )}
          keyExtractor={(item) => `note-${item.id}`}
        />
      </View>
      <Floatingbutton />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  tabView: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },

  noteView: {
    // paddingHorizontal: 10,
    height: "100%",
  },
});
