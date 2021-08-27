const mongoose = require('mongoose')

var Schema = mongoose.Schema

let ApartmentsSchema = new Schema({
    rooms : Number,
    floor : Number,
    buyers : [{ name : String , amount:Number}]
});

module.exports = mongoose.model('apartments',ApartmentsSchema)


