const express = require('express');

const app = express();

const route = require('./router')

app.use('/api/users', route)

app.listen(3005, () => {
    console.log("server listenning to port 3005");
})