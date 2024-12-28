import { useState } from "react";

function AddNewNote({ onAddNote }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const headleSubmit = (e) => {
    e.preventDefault();

    if(!title || !description) return null;

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString()
    }

    onAddNote(newNote)

    setTitle("");
    setDescription("");
  }

  return (
    <div>
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={headleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="text-field" placeholder="Note titel" />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="text-field" placeholder="Note description" />
        <button type="submit" className="btn btn--primary">Add New Note</button>
      </form>
    </div>
  )
}

export default AddNewNote;
