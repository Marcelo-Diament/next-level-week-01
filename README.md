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


## Project Structre

### server > database
Has all DB files

### server > database > connection.ts
Defines connection

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

