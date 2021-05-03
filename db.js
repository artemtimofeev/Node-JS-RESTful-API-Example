const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'simple_app'
})


module.exports = pool
