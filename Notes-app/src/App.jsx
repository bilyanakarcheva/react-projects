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

  return (
    <div className='container'>
      <header>
        <h1>My Notes List</h1>
      </header>
      <CustomForm addNote={addNote} />
      {notes && <NotesList notes={notes} />}
    </div>
  )
}

export default App
