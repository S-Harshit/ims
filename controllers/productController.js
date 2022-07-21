const { findByIdAndUpdate } = require("../model/productModel");
const productModel = require("../model/productModel");


const listProducts = async (req, res) => {
  const result = await productModel.find();
  res.json(result);
}

const addProduct = async (req, res) => {
  try {
    const check = await productModel.findOne({ name: req.body.name });
    if (check) {
      let newQty = Number(check.qty) + Number(req.body.qty)
      await productModel.findByIdAndUpdate(check._id, { qty: newQty });

    }
    else {
      productModel.create({
        name: req.body.name,
        category: req.body.category,
        qty: req.body.qty,
        price: req.body.price
      })
    }
    //const result = await productModel.create(req.body);

    res.json({ add: "success" })
  }
  catch (e) {
    res.json({ serverError: e });
  }

}

const deleteProduct = async (req, res) => {

  try {
    const check = await productModel.findOne({ name: req.body.name });

    if (check) {
      const deleted = await productModel.findByIdAndDelete(check._id)
      res.json({ deleted: deleted });
    }
  }
  catch (e) {
    res.json({ serverError: e });
  }

}

const updateProduct = async (req, res) => {

  const check = await productModel.findOne({ name: req.body.name });

  try {
    if (check) {
      const result = await productModel.findByIdAndUpdate(check._id, { qty: req.body.qty, price: Number(req.body.price) });
      console.log(result)
      res.json({ updated: result })
    }

  }
  catch (e) {
    console.error(e);
    res.json({ serverError: e });
  }

}

module.exports = {
  addProduct,
  deleteProduct,
  updateProduct,
  listProducts
}