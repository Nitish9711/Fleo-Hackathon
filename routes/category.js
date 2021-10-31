const express = require('express');
const categoryController = require('../controllers/category');


const router = express.Router();


router.post('/add', categoryController.createCategory);

router.get('/relatedParents',categoryController.relatedParents);

router.get('/retriveChild', categoryController.relatedChild)


module.exports = router;
