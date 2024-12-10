const mongoose = require("mongoose");

const product = new mongoose.Schema(
  {
    productName: String,
    productDetails: String,
    price: Number,
    quantity: Number,
    totalPrice: Number,
    productImage: String,
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model("Product", product);
