import express from 'express'
import cors from 'cors'
import router from './routes/index'
require('dotenv').config()
require('./config/database')

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use('/api', router)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`))