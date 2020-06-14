import express from 'express';

// Creates express app with its methods
const app = express();

// Defines users route
app.get('/users', (request, response) => {
    console.log('app get() method with /users route');

    // Returns JSON response
    response.json([
        'Fulano',
        'Ciclano',
        'Beltrano'
    ]);
})

// Defines port to access app
app.listen(3333);

