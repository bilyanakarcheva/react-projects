import { useEffect, useState } from 'react'
import './App.css'
// custom components
import CustomForm from './components/CustomForm'
import NotesList from './components/NotesList';
import {
  fetchNotesFromAPI,
  addNoteAPI,
  toggleNoteAPI,
  deleteNoteAPI,
  updateNoteAPI
} from './components/apiHelper';
import ThemeBar from './components/ThemeBar';

function App() {
  //const [notes, setNotes] = useLocalStorage('notes-storage', []); // Using custom hook to store notes in local storage
  const [notes, setNotes] = useState([]); // Using state to store notes

  const addNote = async (note) => {
    const newNote = await addNoteAPI(note);
    console.log(newNote);
    if (newNote) {
      setNotes(currNotes => [...currNotes, note]); // Every time a note is added, the notes array is updated and the component re-renders
    }
  } 

  const toggleNote = async (id) => {
    const toggledNote = await toggleNoteAPI(id);
    setNotes(currNotes => currNotes.map(note =>
      note.id === id ? toggledNote : note
    ));
  };

  const deleteNote = async (id) => {
    const isDeleted = await deleteNoteAPI(id);
    if (isDeleted) {
      setNotes(currNotes => currNotes.filter(n => n.id !== id));
    }
  }

  const updateNote = async (id, note) => {
    const updatedNote = await updateNoteAPI(id, note);
    if (updatedNote) {
      setNotes(currNotes => currNotes.map(note =>
        note.id === id ? updatedNote : note
      ));
    }
  };

  const loadNotes = async () => {
    const notesItems = await fetchNotesFromAPI();
    console.log('Notes', notesItems);
    setNotes(notesItems);
    console.log('Notes', notes);
  };

  useEffect(() => {
    loadNotes();
  }, []); // Empty array means this effect will only run once

  return (
    <div className='container'>
      <ThemeBar />
      <header>
        <h1>My Notes</h1>
      </header>
      <CustomForm addNote={addNote} />
      {notes && (
        <NotesList
          toggleNote={toggleNote}
          notes={notes}
          deleteNote={deleteNote}
          updateNote={updateNote}
        />
      )}
    </div>
  )
}

export default App
