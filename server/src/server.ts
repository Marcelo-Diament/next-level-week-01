import express from 'express';

/**
 * 
 * Request Param is a parameter type that are sent in the route itself and identifies a recurse
 * 
 * Query Param is similar to request param, but normally it is optional (such as filtering params)
 * Eg.: route/recurse?queryParamName=queryParamValue(to be searched)
 * 
 * Request Body Param: creates/updates info
 * 
 */


// Creates express app with its methods
const app = express();

// Declaring that JSON resource will be used
app.use(express.json());

// Defines a users array
const users = [
    'Fulano',
    'Ciclano',
    'Beltrano'
]

/**
 * Defines users recurses route, where
 *  'get' is the method chosen
 *  'users' is the recurse
 * We can access the exactly same route and 
 * get different results according to the method
 */
app.get('/users', (request, response) => {

    // Defining a query param named search (we're definig as string temporarely, to avoid type errros)
    const search = String(request.query.search);

    /**
     * Filtering users by
     * filtering users array and
     * checking if any ocurrence includes the searched term
     * IF there is any search query param,
     * ELSE returns users complete array
     */
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

// Creating a post route using the same users recurse
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

