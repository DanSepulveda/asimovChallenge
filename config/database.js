const mysql = require('mysql2')
const { promisify } = require('util')

const configuration = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
}

const pool = mysql.createPool(configuration)

pool.getConnection(function (err, connection) {
    if (err) {
        console.log(err)
        return
    }
    if (connection) {
        // Creating appointments table
        // pool.query('CREATE TABLE IF NOT EXISTS appointments (id INT AUTO_INCREMENT PRIMARY KEY, date VARCHAR(20) NOT NULL, time VARCHAR(20) NOT NULL, email VARCHAR(255) NOT NULL)')

        connection.release()
        console.log('Database connected')
    }
})

pool.query = promisify(pool.query)

module.exports = pool