const mongoose = require('mongoose')
var _mongoDbURL='mongodb://localhost:27017/';
var _dbName='personsDB';

mongoose.connect(_mongoDbURL+_dbName)

const db = mongoose.connection;

db.once('open',() => console.log("Connecting succeeded !!"))

