const express = require('express');
const { addProduct, updateProduct, deleteProduct, listProducts } = require('../controllers/productController');
const productRouter = express.Router();

productRouter.get("/list", listProducts)
productRouter.post("/add", addProduct)
productRouter.post("/update", updateProduct)
productRouter.post("/delete", deleteProduct)

module.exports = productRouter
