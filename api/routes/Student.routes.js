const express = require('express');
const router = express.Router();
const { student } = require('../controller/student.controller');
router.post('/studentinfo',student );


module.exports = router;