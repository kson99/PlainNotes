import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("Notes.db");

const createTable = () => {
  db.transaction((txn) => {
    txn.executeSql(
      "CREATE TABLE IF NOT EXISTS Notes (id INTEGER PRIMARY KEY AUTOINCREMENT, note TEXT, category TEXT, title TEXT, time TEXT, charCount TEXT)"
    );
  });
};

const getNotes = (setNotes) => {
  db.transaction((trns) => {
    trns.executeSql(
      "SELECT * FROM Notes",
      null,
      (txObj, { rows: { _array } }) => {
        setNotes(_array);
      },
      (err) => console.log("getting notes failed: ")
    );
  });
};

const addNoteDB = (title, category, timestamp, note, charCount) => {
  db.transaction((trns) => {
    trns.executeSql(
      "INSERT INTO Notes (note, category, time, title, charCount) VALUES (?, ?, ?, ?, ?)",
      [note, category, timestamp, title, charCount],
      (res) => console.log("Added note"),
      (err) => console.log("Failed")
    );
  });
};

const deleteNote = (id) => {
  db.transaction((trans) => {
    trans.executeSql("DELETE FROM Notes WHERE id = ?", [id]);
  });
};

const updateNote = (data, id) => {
  const note = data.note;
  const category = data.category;
  const title = data.title;
  const charCount = data.charCount;

  console.log(data, id);

  db.transaction((trans) => {
    trans.executeSql(
      "UPDATE Notes SET note = ?, category = ?, title = ?, charCount = ? WHERE id = ?",
      [note, category, title, charCount, id],
      (res) => console.log("note updated"),
      (err) => console.log("Failed", err)
    );
  });
};

export { createTable, getNotes, addNoteDB, deleteNote, updateNote };
