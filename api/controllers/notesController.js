import {
    getAllNotesModel,
    addNoteModel,
    toggleNoteModel,
    deleteNoteModel,
    updateNoteModel
} from '../models/notesModel.js';


//What the controller does is to call the model function that returns the notes objects and then send them as a response to the client.
//The controller takes care of the request and response, and the model takes care of the data.
export async function getNotesController(req, res) {
    try {
        const notes = getAllNotesModel();
        if (notes) {
            res.status(200).json(notes);
        } else {
            res.status(404).json({ message: 'No notes found' });
        }


    } catch (error) {
        res.status(500).json({ message: `Error fetching notes objects:${error}` });
    }
};

export async function addNoteController(req, res) {
    try {
        const newNote = req.body;
        const addedNote = await addNoteModel(newNote);
        res.status(201).json(addedNote); //201 status code means that the request has been fulfilled and has resulted in one or more new resources being created.
    } catch (error) {
        res.status(500).json({ message: `Failed adding new note: ${error}` });
    }
}

export async function toggleNoteController(req, res) {
    try {
        const toggledId = req.params.id;
        const toggled = toggleNoteModel(toggledId);
        if (toggled) {
            res.status(200).json(toggled);
        } else {
            res.status(404).json({ message: 'Note not found' });
        }

    } catch (error) {
        res.status(500).json({ message: `Error when updating note status: ${error}` });
    }
}

export async function deleteNoteController(req, res) {
    try {
        const deletedId = req.params.id;
        const deletedNote = deleteNoteModel(deletedId); 
        if (deletedNote) {
            res.status(200).json({ message: `Deleted note: ${deletedNote}` });
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    } catch (error) {
        res.status(500).json({ message: `Error deleting note:${error}` });
    }
}

export async function updateNoteController(req, res) {
    try {
        const updateId = req.params.id;
        const updatedDescription = req.body;
        const updatedNote = updateNoteModel(updateId, updatedDescription);
        if (updatedNote) {
            res.status(200).json(updatedNote);
        } else {
            res.status(404).json('Note not found');
        }
    } catch (error) {
        res.status(500).json({ message: `Error while updating note: ${updatedNote}` });
    }
}