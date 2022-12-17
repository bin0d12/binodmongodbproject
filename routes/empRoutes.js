const express = require('express');
const router = express.Router()
const eplController = require('../controller/empController');


router.get('/', eplController.index)
router.post('/store', eplController.store)
// findEmp, updateEmp, deleteEmp
router.post('/findIndex', eplController.findEmp);
router.post('/updateEmp' , eplController.updateEmp);
router.post('/deleteEmp', eplController.deleteEmp)

module.exports = router