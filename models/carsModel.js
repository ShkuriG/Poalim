const mongoose = require('mongoose')

var Schema = mongoose.Schema

let CarsSchema = new Schema({
    type : String,
    year : Number,
    buyers : [{ name : String , price:Number}]
});

module.exports = mongoose.model('cars',CarsSchema)


