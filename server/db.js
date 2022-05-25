const mongoose = require("mongoose");

function connectDB(){
    mongoose.connect('mongodb+srv://admin:admin13@cluster0.jkctj.mongodb.net/?retryWrites=true&w=majority',
     {useunifiedTopology: true,
    useNewUrlParser:true})

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