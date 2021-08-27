const mongoose = require('mongoose')

var Schema = mongoose.Schema

let PersonSchema = new Schema({
    name : String,
    age : Number,
    address : [{ city : String , street : String,number:Number}]
});

module.exports = mongoose.model('persons',PersonSchema)


