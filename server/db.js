const mongoose = require("mongoose");
require('dotenv').config();

function connectDB(){
    mongoose.connect(process.env.DATABASE,
     {
    useunifiedTopology: true,
    useNewUrlParser:true
})

    const connection = mongoose.connection

    connection.on('connected', ()=>{
        console.log('Successfully connected to DB')
    })

    connection.on('error', ()=>{
        console.log('Error connection to DB')
    })
}

connectDB()

module.exports = mongoose
