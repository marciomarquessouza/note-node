const fs = require('fs');
const notesDataFile = "notes-data.json";

const fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync(notesDataFile));
  } catch (e) {
    console.log(`No data found: the file ${notesDataFile} wasn't found or it was empty.`);
    return [];
  }
};

const saveNotes = (notes) => {
  try {
    fs.writeFileSync(notesDataFile, JSON.stringify(notes));
  } catch (e) {
    console.log(`Error to write in the file ${notesDataFile}`);
  }
};

const addNote = (title, body) => {
  const notes = fetchNotes();
  let note = { title, body };
  let duplicatedNotes = notes.filter(note => note.title === title);
  if (duplicatedNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  return fetchNotes();
};

const getNote = (title) => {
  const notes = fetchNotes();
  const noteFiltered = notes.filter(note => note.title === title );
  return noteFiltered[0];
};

const removeNote = (title) => {
  let notes = fetchNotes();
  const filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

const logNote = (note) => {
  console.log("************************");
  console.log("Note:");
  console.log(`Title: ${note.title}\nBody: ${note.body}`);
  console.log("************************");
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote,
};
