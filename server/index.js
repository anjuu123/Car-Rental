const express = require('express')
const app = express()
require('dotenv').config();
const port =process.env.PORT || 8000
const dbConnection = require('./db')
app.use(express.json())


app.use('/api/cars/', require('./routes/carRoutes'))
app.get('/',(req, res) => res.send("Hello World"))
app.listen(port, () => console.log(`running server in ${port}`))