import express from 'express';

// Creates express app with its methods
const app = express();

// Declaring that JSON resource will be used
app.use(express.json());

// A get route to index/root route
app.get('/', (request, response) => {
    // Returns users JSON
    return response.json({ message: 'Hey there!'});
})

// Defines port to access app
app.listen(3333);
