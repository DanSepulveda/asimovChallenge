import { ConfigProps } from "../types"

const mysql = require('mysql2')
const { promisify } = require('util')

const configuration: ConfigProps = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT

}

const pool = mysql.createPool(configuration)

pool.getConnection(function (err: any, connection: any) {
    if (err) {
        console.log(err)
        return
    }
    if (connection) {
        // Creating appointments table
        pool.query('CREATE TABLE IF NOT EXISTS appointments ( id INT AUTO_INCREMENT PRIMARY KEY, date DATE NOT NULL, email VARCHAR(255) NOT NULL, time_from TINYINT(2) NOT NULL CHECK (time_from in (9, 10, 11, 12, 13, 14, 15, 16, 17)))')

        connection.release()
        console.log('Database connected')
    }
})

pool.query = promisify(pool.query)

export default pool