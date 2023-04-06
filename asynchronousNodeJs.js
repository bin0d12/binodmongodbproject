const fs = require('fs');

const read = fs.readFile('input.txt', 'utf-8', (err, data) => {
    console.log(data);
})
console.log("reading the data");