# next-level-week-01
NextLevelWeek #01 Project

## Notes

### About Routes, Resources and Methods
The methods that we'll use are:
- get (eg.: list users or list user),
- post (eg.: create user),
- put (eg.: update user)
- delete (eg.: remove user)

Method is combined with resource in the route. Examples:
get(/users?search=ano) => get users that have 'ano' string in its names
get(/users/:id) => gets specific user by its ID


### About Requests Types
Request Param is a parameter type that are sent in the route itself and identifies a resource

Query Param is similar to request param, but normally it is optional (such as filtering params)
Eg.: route/resource?queryParamName=queryParamValue(to be searched)

Request Body Param: creates/updates info

### About DB Queries and Knex.js
knex.js is a query builder that makes query building syntax easier than sql (similar to js)

### About DB entities
knex.js migrations allows us to construct entities (DB tables) directly on those files, that makes easier to share the project and make entities creation and their relationship a dinamic way (similar to Laravel migrations, for example).

The order of migration files is important, so the schemas will be created based on ASC order of the files based on its file names. So we must pay attention to this topic if we create them manually.

In each migration file, we have the up method (when we create a table) and down (used for rollbacks).


## Project Structre

### server > database
Has all DB files

### server > database > connection.ts
Defines connection

### server > database > migrations
Stores migration related files (one for each schema in the DB)

### server > database > migrations > 00_create_points.ts
Responsable for points schema

### server > database > migrations > 01_create_items.ts
Responsable for items schema

### server > database > migrations > 02_create_point_items.ts
Responsable for the schema that relates n items to a specific point (1:n relation)

### server > knexfile.ts
Module that has extra info related to DB (that are not included on connection file)

### server > server.ts
Responsable for the app itself

### server > routes.ts
Responsable for the project routes


## Tools and Resources

### Chocolatey
It is a package manager that will help us to install our dependencies
(Chocolatey)[https://chocolatey.org/install]

### Node.js
Node.js itself. Is recommended to download the LTS (Long Term Support) version.
(node.js)[https://nodejs.org/en/download/]

### JSON Viewer
A browser extension that 'preetyfies' JSON files in the browser
(JSONViewer for Chrome)[https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh/related?hl=pt-BR]

### Insomnia
Similar to Postman, helps us to test requests that are not acessible through browser (such as post methods)
(Insomnia)[https://insomnia.rest/download/#windows]

