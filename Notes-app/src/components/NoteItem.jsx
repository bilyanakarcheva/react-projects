const NoteItem = ({ note }) => {
  const handleDelete = () => {

  }

  return (
    <li
      style={{ display: 'flex', gap: '2em' }}
    >
      <label
        htmlFor={note.id}
      >
        <p>{note.details}</p>
      </label>
      <button
        style={{ background: 'yellow', color: 'black' }}>
        {/* onClick={} */}
        Update
      </button>
      <button
        style={{ background: 'red' }}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  )
}

export default NoteItem