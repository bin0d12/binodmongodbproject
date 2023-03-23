const mongoose = require('mongoose');
const email = require('./models/practiceSchemaCreation')

// FETCHING ENV FILE DATA
let envData = require('dotenv').config();

let server = process.env.SERVER;
let databaseName = process.env.DATABASENAME

// const server = 'mongodb://localhost:27017';
// const databaseName = 'testData'

// email.


mongoose.connect(`${server}/${databaseName}`).then(() => {
    console.log("connection successfully");
}).catch((err) => {
    console.log(err);
})
// mongoose.connect("mongodb://localhost:27017/testData");

// let user = new email({email: 'binodcdasv', name : "binod", age: 26})

// user.save().then(() => {
//     console.log("data saved");
// }).catch((err) => {
//     console.log(err);
// })

async function run(){
    try{
        const user = await email.create({email: 'subham@gmail.com', name : 5456, age: 25})
        // user.name = "cdffsvcd"
        // user.save()
    // let user = new email({email: 'binodcdasv', name : "binod", age: 26})
    // await user.save();
    console.log(user, "saved successfully");

    }catch (e)  {
        console.log(e.message);
    }
//     const user = await email.create({email: 'subham@gmail.com', name : "subham", age: 25})
//     user.name = "subh"
//     user.save()
// // let user = new email({email: 'binodcdasv', name : "binod", age: 26})
// // await user.save();
// console.log(user, "saved successfully");
}

run()