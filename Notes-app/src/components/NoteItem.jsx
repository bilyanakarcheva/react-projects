import { useEffect, useState } from 'react';
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { TrashIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'
import styles from './NoteItem.module.css'


const NoteItem = ({ note, deleteNote, updateNote, toggleNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedNote, setUpdatedNote] = useState({ ...note }); // This line initializes the updatedNote state with the note id and details. If the note details are null or undefined, it sets the details to an empty string.

  const handleDelete = () => {
    deleteNote(note.id);
  }

  const handleUpdate = (id, updatedNote) => {
    updateNote(id, updatedNote);
    setIsEditing(false)
  }

  const handleToggleNote = () => {
    console.log(updatedNote);
    toggleNote(updatedNote.id);
  }

  useEffect(() => {
    setUpdatedNote({ ...note });
  }, [])

  return (
    <li
      className={styles['note-item']}
    >
      {isEditing ? (
        <>
          <div className={styles['notes-group']}>
            <input
              type='text'
              id={updatedNote.id}
              value={updatedNote.details || ''}
              onInput={(e) => setUpdatedNote({ ...updatedNote, details: e.target.value })}
              maxLength={100}
            />
          </div>
          <div className={styles['notes-group']}>
            <button
              className='btn'
              onClick={() => handleUpdate(updatedNote.id, updatedNote)}
            >
              <CheckIcon
                style={{ width: '24px', height: '24px' }}
              />
            </button>
            <button
              className='btn btn-secondary'
              onClick={() => setIsEditing(false)}
            >
              <XMarkIcon
                style={{ width: '24px', height: '24px' }}
              />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles['notes-group']}>
            <input
              type='checkbox'
              id={updatedNote.id}
              onClick={() => handleToggleNote()}
            >
            </input>
            {/* <label
            htmlFor={note.id}
          > */}
            <p>{updatedNote.details}</p>
            {/* </label> */}
          </div>
          <div className={styles['notes-group']}>
            <button
              className='btn'
              onClick={() => setIsEditing(true)}>
              <PencilSquareIcon
                style={{ width: '24px', height: '24px' }}
              />
            </button>
            <button
              className='btn btn-secondary'
              onClick={handleDelete}
            >
              <TrashIcon
                style={{ width: '24px', height: '24px' }}
              />
            </button>
          </div>
        </>
      )}
    </li>
  )
}

export default NoteItem