import express from 'express'; // We add express to create our server, handle our routes, requests and responses
import { getNotesController,
    addNoteController,
    toggleNoteController,
    deleteNoteController,
    updateNoteController
 } from '../controllers/notesController.js'; // We import our controller to use it in our routes
// What is the controller? - The controller is the file where we define the functions that will be executed when a route is called

export const router = express.Router(); // We create a router to handle our routes
// We import our controller to use it in our routes

// We set the route for our notes
// Get All
router.get('/', getNotesController);

// Create
router.post('/', addNoteController);

// Update (Toggle)
router.put('/', toggleNoteController);

// Delete
router.delete('/', deleteNoteController);

// Update (Note description)
router.put('/updateNote', updateNoteController);