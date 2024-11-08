import { useState } from 'react';

const NoteItem = ({ note, deleteNote, updateNote, toggleNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedNote, setUpdatedNote] = useState({ id: note.id, details: note.details ?? '' }); // This line initializes the updatedNote state with the note id and details. If the note details are null or undefined, it sets the details to an empty string.

  const handleDelete = () => {
    deleteNote(note.id);
  }

  const handleUpdate = (id, updatedNote) => {
    updateNote(id, updatedNote);
    setIsEditing(false)
  }

  return (
    <li
      style={{ display: 'flex', gap: '2em' }}
    >
      {isEditing ? (
        <div className='btn-group'>
          <input
            type='text'
            id={updatedNote.id}
            value={updatedNote.details || ''}
            onInput={(e) => setUpdatedNote({...updatedNote, details: e.target.value})}
            maxLength={100}
          />
          <button
            style={{ background: 'green' }}
            onClick={() => handleUpdate(updatedNote.id, updatedNote)}
          >
          Save
          </button>
          <button
            style={{ background: 'red' }}
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className='btn-group'>
          <input
            type='checkbox'
          >
          </input>
          {/* <label
            htmlFor={note.id}
          > */}
            <p>{updatedNote.details}</p>
          {/* </label> */}
          <button
            style={{ background: 'yellow', color: 'black' }}
            onClick={() => setIsEditing(true)}>
            Update
          </button>
          <button
            style={{ background: 'red' }}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      )}
    </li>
  )
}

export default NoteItem