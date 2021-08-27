const mongoose = require('mongoose')

var Schema = mongoose.Schema

let UsersSchema = new Schema({
    name : String,
    current_code : String,
    old_pass : [{ id : Number , pass : String}]
});

module.exports = mongoose.model('users',UsersSchema)


