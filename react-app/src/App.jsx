import { useState, useEffect } from "react";
import NotesForm from "./components/NotesForm.jsx";
import NotesList from "./components/NotesList.jsx";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // 📌 Load from localStorage when app starts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) setNotes(savedNotes);
  }, []);

  // 📌 Save to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // 📌 CREATE or UPDATE note
  const handleSave = () => {
    if (!noteText.trim()) return;

    if (editIndex !== null) {
      // UPDATE
      const updated = [...notes];
      updated[editIndex] = noteText;
      setNotes(updated);
      setEditIndex(null);
    } else {
      // CREATE
      setNotes([...notes, noteText]);
    }

    setNoteText("");
  };

  // 📌 DELETE note
  const handleDelete = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // 📌 EDIT note
  const handleEdit = (index) => {
    setNoteText(notes[index]);
    setEditIndex(index);
  };

  return (
    <div className="app-container">
      <h1>📒 Notes</h1>

      <NotesForm
        noteText={noteText}
        setNoteText={setNoteText}
        onSubmit={handleSave}
        isEditing={editIndex !== null}
      />

      <NotesList notes={notes} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
