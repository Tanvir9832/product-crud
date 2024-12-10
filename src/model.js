const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
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
const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
