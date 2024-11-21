import NoteItem from "./NoteItem"

const NotesList = ({ notes, deleteNote, updateNote, toggleNote }) => {
    return (
        <ul
            className="notes-list"
            // style={{ display: 'grid', gap: '1.5em', margin: '2em' }}
            >
            {notes.sort((a, b) => b.id - a.id).map(note => (
                <NoteItem
                    key={note.id}
                    note={note}
                    deleteNote={deleteNote}
                    updateNote={updateNote}
                    toggleNote={toggleNote}
                />
            ))}
        </ul>
    )
}

export default NotesList