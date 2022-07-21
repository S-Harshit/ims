const express = require('express');
const { listCategory, addCategory } = require('../controllers/categoryController');
const categoryRouter = express.Router();

categoryRouter.get(("/list"), listCategory)
categoryRouter.post(("/add"), addCategory)
// categoryRouter.put(("/update"), updateCategory)
// categoryRouter.delete(("/delete"), deleteCategory)

module.exports = categoryRouter  