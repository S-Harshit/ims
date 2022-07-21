const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true
  },
  qty: {
    type: Number
  },
  price: {
    type: Number,
    required: true
  }

})

const productModel = mongoose.model("productModel", productSchema);

module.exports = productModel;