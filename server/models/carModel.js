const mongoose = require("./../db");

const Schema = mongoose.Schema;

const carSchema = new Schema({

    name: {type : String, required:true},
    image:{type : String, required : true},
    capacity:{type : Number, required : true},
    feulType:{type : String, required : true},
   bookedTimeSlots : [
       {
           from: {type: String, required: true},
           to: {type:String, required: true}
       }
   ],
   rentPerHour: {type : Number, required : true}
    }, {timestamps : true}
)

module.exports = mongoose.model("Cars", carSchema);