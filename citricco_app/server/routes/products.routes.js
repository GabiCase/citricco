const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Cart = require("../models/cart.model.js");
const Product = require("../models/product.model.js");
const User = require("../models/user.model.js");

// Endpoints
router.get("/getAllProducts", (req, res) => {
  Product.find()
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.get("/getOneProduct/:product_id", (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.product_id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Product.findById(req.params.product_id)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});


router.post("/newProduct", (req, res) => {
  Product.create(req.body)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});


// router.put('/editProduct/:product_id', (req, res) => {

//   if (!mongoose.Types.ObjectId.isValid(req.params.product_id)) {
//     res.status(400).json({ message: 'Specified id is not valid' })
//     return
//   }

//   Product.findByIdAndUpdate(req.params.product_id, req.body)
//     .then(response => res.json(response))
//     .catch(err => res.status(500).json(err))
// });

module.exports = router;
