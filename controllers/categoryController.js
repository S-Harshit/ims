const { default: mongoose } = require("mongoose");
const categoryModel = require("../model/categoryModel");

const listCategory = async (req, res) => {
  const result = await categoryModel.find();
  res.json(result);

}

const addCategory = async (req, res) => {
  const ObjectId = require('mongodb').ObjectId;
  const doc_id = "62d80ac41670f70602e97f95"
  const check = await categoryModel.find({ id: ObjectId(doc_id) })
  try {
    if (!check) {
      const cat = await categoryModel.findOneAndUpdate({ id: ObjectId(doc_id) }, { $push: { category: req.body.category } }).then(() => {
        res.json({ success: ObjectId(doc_id) });
      });
    }
  }

  catch (e) {
    res.json(e);
  }

  // res.json(result);
}

module.exports = { listCategory, addCategory };