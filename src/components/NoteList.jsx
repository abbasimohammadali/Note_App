function NoteList({ notes , onDelete}) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete}/>
      ))}
    </div>
  )
}

export default NoteList;
 
function NoteItem({ note , onDelete }) {

  const optins = {
    year:"numeric",
    month:"long",
    day:"numeric"
  }

  return (
    <div className="note-item">
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input type="checkbox" />
        </div>
      </div>
      <div className="note-list__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US" , optins)}
      </div>
    </div>
  )
}