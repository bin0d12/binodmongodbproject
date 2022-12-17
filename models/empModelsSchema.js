const mongoose = require('mongoose');

const schema = mongoose.Schema

const employeeSchema = new schema({
    name: {
        type: String
    },
    // mail: {
    //     type: String
    // },
    designation: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }, 
    age: { 
        type: String
    }
}, {timestamps: true}
);

module.exports = employeee = mongoose.model('employeee', employeeSchema)