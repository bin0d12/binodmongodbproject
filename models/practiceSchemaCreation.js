const mongoose = require('mongoose')
// mongoose connection
let emailSchema = new mongoose.Schema({
    email: String,
    name: String,
    age: Number
})

// ---------------   or -------------------

let emailSchemaAnotherMethod = mongoose.Schema

let schemaOne = new emailSchemaAnotherMethod({
    email: String,
    name:{
        type :String,
        require: true
    },
    age: Number
})

module.exports = mongoose.model('Email', schemaOne)