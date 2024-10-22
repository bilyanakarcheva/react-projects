import { useState } from 'react'
import './App.css'
// custom components
import CustomForm from './components/CustomForm'

function App() {
  const addNote = (note) => {
    console.log(note);
  }

  return (
    <div className='container'>
      <header>
        <h1>My Notes List</h1>
      </header>
      <CustomForm addNote={addNote} />
    </div>
  )
}

export default App
