import express from 'express';

// Creates express app with its methods
const app = express();

// Declaring that JSON resource will be used
app.use(express.json());

// Defines a users array (temporary, for testing purpose)
const users = [
    'Fulano',
    'Ciclano',
    'Beltrano'
]

// A get route to list all users
app.get('/users', (request, response) => {

    // Defining a query param named search (we're definig as string temporarely, to avoid type errros)
    const search = String(request.query.search);

    // Filters users by specific term if search is present on request
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    // Returns users JSON
    return response.json(filteredUsers);
})

// Route that returns a specific user by its ID (where we're considering user index as its ID)
app.get('/users/:id', (request, response) => {

    // Defining ID as request params id (of Number type)
    const id = Number(request.params.id);

    // Defining user as specific user from users array (by its ID)
    const user = users[id];

    // Returns user
    return response.json(user);

})

// Creating a post route using the same users resource
app.post('/users', (request, response) => {

    // Getting info from body request
    const data = request.body;

    console.log(data);

    // Creating a new user (based on data, which is the requests body)
    const user = {
        name: data.name,
        email: data.email
    };
    // It is recommended to always declare the return statement in order to stops requisition
    return response.json(user);
})

// Defines port to access app
app.listen(3333);

