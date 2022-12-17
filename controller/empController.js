const response = require('express');
const scemaEmp = require('../models/empModelsSchema');

// store the data
const store = (req, res) => {
    let employee = new scemaEmp({
        name: req.body.name,
        designation: req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    })
    console.log(employee, "emplyyyyyyy");
    employee.save()
}
// get all the data
const index = (req, res) => {
    scemaEmp.find().then(response => {
        res.json({
            response
        })
    }) .catch(err => {
        res.json({
            message: "error in index"
        })
    })
}

// get the data as per find index
const findEmp = (req, res) => {
    let employee1 = req.body.employee;
    console.log(employee1, "emp");
    scemaEmp.findById(employee1).then(response => {
        res.send({
            response
        })
    }).catch(error => {
        res.json({
            message: "error in find indexxxx"
        })
    })
}
// update employee
const updateEmp = (req, res) => {
    let emp = req.body.id;
    
}
// delete employee
const deleteEmp = (req, res) => {

}

module.exports = {
    index, store, findEmp, updateEmp, deleteEmp
}
