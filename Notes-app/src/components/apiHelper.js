import { deleteNoteController } from "../../../api/controllers/notesController";

const baseUrl = 'http://localhost:3001/api/notes';
// We use apiHelper to make requests to our backend
// and we need to write the functions to make the requests for each endpoint

// Get all notes
export const fetchNotesFromAPI = async () => {
    try {
        const response = await fetch(baseUrl);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to fetch notes');
        }
    } catch (error) {
        console.error(`Error fetching notes:${error}`);
        return [];
    }
};

export const addNoteAPI = async (note) => {
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(note),
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Failed to add note');
        }
    } catch (error) {
        console.error(`Error while adding note: ${error}`);
        return null;
    }
}

export const toggleNoteAPI = async (noteId) => {
    try {
        const response = await fetch(`${baseUrl}/${noteId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Failed to update toggle');
        }
    } catch (error) {
        console.error(`Error when updating toggle: ${error}`);
    }
}

export const deleteNoteAPI = async (noteId) => {
    try {
        const response = await fetch(`${baseUrl}/${noteId}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(`Failed deleting note`);
        }
    } catch (error) {
        console.error(`Error removing note: ${error}`);
        return false;
    }
}

export const updateNoteAPI = async (noteId, noteDescription) => {
    try {
        const response = await fetch(`${baseUrl}/updateNote/${noteId}`, {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({ description: noteDescription})
        });
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error(`Failed updating note`);
        }
    } catch (error) {
       console.error(`Error when updating note: ${error}`); 
    }
}