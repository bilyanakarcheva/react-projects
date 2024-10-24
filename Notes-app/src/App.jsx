import { useState } from 'react'
import './App.css'
// custom components
import CustomForm from './components/CustomForm'
import NotesList from './components/NotesList';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes(currNotes => [...currNotes, note]);
    console.log(note);
  }

  const deleteNote = (id) => {
    setNotes(currNotes => currNotes.filter(n => n.id !== id));
  }

  const updateNote = (id, updatedNote) => {
    setNotes(currNotes => currNotes.map(note => {
      note.id === id
        ? updatedNote
        : note
    }
    ));
  };

  return (
    <div className='container'>
      <header>
        <h1>My Notes List</h1>
      </header>
      <CustomForm addNote={addNote} />
      {notes && (
        <NotesList
          notes={notes}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      )}
    </div>
  )
}

export default App
