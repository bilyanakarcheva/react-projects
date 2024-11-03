import express from 'express'; // We add express to create our server, handle our routes, requests and responses
import cors from 'cors'; // we add cors because we want to be able to make requests from our frontend to our backend 
//and because we are setting 2 servers, we need to allow the communication between them
import { router } from './routes/notesRoutes.js'; // We import our notesRoutes file to use it in our server

const app = express(); 
const port = 3001; // We set the port where our server will be running

app.use(express.json()); // It means that we'll be sending and receiving JSON format
app.use(cors()); // We use cors to allow communication between our frontend and backend (middleware)

//should I create a new file to store routes? - You should create a new file to store your routes
//Can I store all routes here? Is it good practice? - You can store all your routes here, but it's better to create a new file to store them
//Should the api created with Express.js be in a separate folder than the main project? - Yes, it's better to have your backend in a separate folder from your frontend

app.use('/api/notes', router); // We set the route for our notes

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});