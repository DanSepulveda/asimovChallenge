const express = require('express');
const cors = require('cors')
require('dotenv').config();
require('./config/database')
// const router = require('./routes/index')

const app = express();

// Middlewares
app.use(cors())
app.use(express.json())
// app.use('/api', router)

const PORT = process.env.PORT || 4000;

app.listen(4000, '0.0.0.0', console.log(`Server listening on Port ${PORT}`));