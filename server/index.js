const express = require('express')
const app = express()
const port =process.env.PORT || 8000
const dbconnection = require('./db')

app.get('/',(req, res) => res.send("Hello World"))
app.listen(port, () => console.log(`running server in ${port}`))