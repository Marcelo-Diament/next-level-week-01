import knex from 'knex';

// Lib to work with path
import path from 'path';

// Object that has all connection properties
const connection = knex({
    // Defines type of db
    client: 'sqlite3',
    // Defines connection props
    connection: {
        // Defines path to db file using path lib
        filename: path.resolve(__dirname, 'database.sqlite')
    }
})

// Export connection (making it avaliable)
export default connection;