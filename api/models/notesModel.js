let notes = [{
    id: 1,
    details: 'This is a note',
    toggle: false
}, {
    id: 2,
    details: 'This is another note',
    toggle: false
}, {
    id: 3,
    details: 'This is a third note',
    toggle: false
}]; 

// The model takes care of the data, in this case, the notes

// This function will return all notes
export function getAllNotesModel() {
    return notes;
}

// This function will add a new note
export function addNoteModel(note) {
    const newNote = {
        id: Date.now(),
        ...note,
        details: note.details,
        toggle: false
    };
    notes.push(newNote);
    return newNote;
}

export function toggleNoteModel(id) {
    // The code is efficient because it uses the findIndex method to find the index of the note with the specific id 
    //and then toggles the value of the toggle property. This approach is more efficient than using the map method because 
    //it only updates the specific note that needs to be toggled, instead of updating all notes in the array. The time complexity of this code is 
    //O(n) (linear) because it uses the findIndex method to find the index of the note with the specific id.
    const toggledNoteIndex = notes.findIndex(note => note.id === parseInt(id));
    
    if (toggledNoteIndex <= -1) { 
        return null;
    } 
    
    const toggledNote = notes[toggledNoteIndex]; 
    toggledNote.toggle = !toggledNote.toggle;
    return toggledNote;
    // This code is less efficient than the one above in the sense that it uses more memory and has a time complexity of O(n^2) because it uses the map method
    //notes = notes.map(note => note.id === id ? { ...note, toggle: !note.toggle } : note); // Make the change to the note with the specific id and save it in the notes array
    //const toggledNote2 = notes.find(note => note.id === id); // Find the note with the specific id and save it in the toggledNote variable  

}

//Delete a note
export function deleteNoteModel(id) { 
    // This code is more efficient than the one below because it uses the findIndex method to find the index of the note with the specific id 
    // and then splices the notes array to remove the note at that index. This approach is more efficient than using the filter method because it only removes
    // the specific note that needs to be deleted, instead of creating a new array with all notes except the one to be deleted. The time complexity of this
    // code is O(n) (linear) because it uses the findIndex method to find the index of the note with the specific id.
    // The code below is with time complexity O(n^2) because it uses the filter method to create a new array with all notes except the one to be deleted.
    const noteIndex = notes.findIndex(note => note.id === parseInt(id));

    if (noteIndex <= -1) {
        return null;
    }

    const deletedNote = notes.splice(noteIndex, 1);
    return deletedNote; 
    //notes = notes.filter(note => note.id !== id);
}

export function updateNoteModel(id, note) {
    const noteIndex = notes.findIndex(note => note.id === parseInt(id)); 

    if (noteIndex <= -1) {
        return null;
    }

    const updatedNote = notes[noteIndex];
    updatedNote.details = note.details;
    return updatedNote;
}

