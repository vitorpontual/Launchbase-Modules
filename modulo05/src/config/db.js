const { Pool } = require('pg')

module.exports = new Pool({
   user: 'vpguedes',
   password: '4five6seven',
   local: "localhost",
   port: 5432,
   database: "gymmanager"
})


