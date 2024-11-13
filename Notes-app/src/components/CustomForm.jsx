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
            className="input-wrapper"
            >
                <input
                    type="text"
                    id="note"
                    className="form-input"
                    value={note}
                    onInput={(e) => setNote(e.target.value)}
                    required // This shows the pop-up message to add something if your field is empty.
                    autoFocus // This focuses the input field when the page loads.
                    maxLength={100}
                    placeholder="Add a note"
                    autoComplete="given-name"
                />
                <label
                    htmlFor="note"
                    className="form-label"
                >
                    Add a note
                </label>
                <button
                    type="submit"
                    className="btn"
                    aria-label="Add Note"
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export default CustomForm