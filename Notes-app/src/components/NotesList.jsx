import NoteItem from "./NoteItem"

const NotesList = ({ notes, deleteNote, updateNote }) => {
    return (
        <ul style={{ display: 'grid', gap: '1.5em', margin: '2em'}}>
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