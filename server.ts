import express from 'express'
import cors from 'cors'
import router from './routes/index'
require('dotenv').config()
require('./config/database')
import path from 'path'

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use('/api', router)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + "/client/build/index.html"))
    })
}

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`))