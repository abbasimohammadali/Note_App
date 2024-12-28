import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([])

  const headelAddNote = (newNote) => {
    setNotes((prevNots) => [...prevNots, newNote])
  }

  const handeleDeleteNote = (id) => {
    setNotes((prevNots) => prevNots.filter((n) => n.id !== id))
  }

return (
  <div className="container">
    <div className="note-header">Note Header</div>
    <div className="note-app">
      <AddNewNote onAddNote={headelAddNote} />
      <div className="note-container">
        <NoteList notes={notes} onDelete={handeleDeleteNote}/>
      </div>
    </div>
  </div>
)
}

export default App;
