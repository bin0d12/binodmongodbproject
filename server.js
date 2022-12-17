const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/empRoutes')

mongoose.connect("mongodb://localhost:27017/testData");

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err);
})

db.once('open', () => {
    console.log("database connected");
})
const app = express();

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use('/api/employee', employeeRoutes)
const port = 3000;

app.listen(port, () => {
    console.log(`port started listening${port}`);
})