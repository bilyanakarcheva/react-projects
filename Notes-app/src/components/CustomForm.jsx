import { useState } from "react";

const CustomForm = ({ addNote }) => {
    const [note, setNote] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevents the page from refreshing
        addNote({
            details: note,
            id: Date.now()
        });
        setNote("")

        console.log(e.target[0].value); // Logs the value of the input
    }

    return (
        <form
            className="notes-form"
            onSubmit={handleFormSubmit}
        >
            <div 
            className="wrapper"
            style={{ display: "flex", gap: "1rem" }}
            >
                <input
                    type="text"
                    id="note"
                    className="form-input"
                    value={note}
                    onInput={(e) => setNote(e.target.value)}
                    required // This shows the pop-up message to add something if your field is empty.
                    autoFocus
                    maxLength={100}
                    placeholder="Add a note"
                />
                <label
                    htmlFor="note"
                    className="form-label"
                >
                    Add a note
                </label>
                <button
                    className="btn"
                    aria-label="Add Note"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export default CustomForm