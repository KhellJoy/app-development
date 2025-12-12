function NotesList({ notes, onDelete, onEdit }) {
  return (
    <ul className="note-list">
      {notes.map((note, index) => (
        <li className="note-item" key={index}>
          <span className="note-text">{note}</span>

          <div className="actions">
            <button className="action-btn" onClick={() => onEdit(index)}>
              Edit
            </button>
            <button className="action-btn" onClick={() => onDelete(index)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default NotesList;
