function NotesForm({ noteText, setNoteText, onSubmit, isEditing }) {
  return (
    <div className="note-form">
      <input
        className="note-input"
        type="text"
        placeholder="Enter note..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />

      <button className="save-btn" onClick={onSubmit}>
        {isEditing ? "Update" : "Save"}
      </button>
    </div>
  );
}

export default NotesForm;
