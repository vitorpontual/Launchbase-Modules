const { Pool } = require('pg')

module.exports = new Pool({
   user: 'vpguedes',
   password: 'postgres',
   local: "localhost",
   port: 5432,
   database: "gymmanager"
})


