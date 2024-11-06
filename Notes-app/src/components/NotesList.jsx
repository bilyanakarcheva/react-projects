import NoteItem from "./NoteItem"
import {
    fetchNotesFromAPI,
    addNoteAPI,
    toggleNoteAPI,
    deleteNoteAPI,
    updateNoteAPI

} from './apiHelper'


const NotesList = ({ notes, deleteNote, updateNote, toggleNote }) => {
    return (
        <ul style={{ display: 'grid', gap: '1.5em', margin: '2em' }}>
            {/* Notes List */}
            {notes.sort((a, b) => b.id - a.id).map(note => (
                <NoteItem
                    key={note.id}
                    note={note}
                    deleteNote={deleteNote}
                    updateNote={updateNote}
                />
            ))}
        </ul>
    )
}

export default NotesList