const express = require("express");
const productController = require("./controller");

const productRouter = express.Router();

productRouter.route("/products").get(productController.getAllProducts);
productRouter.route("/product").post(productController.createProduct);
productRouter.route("/product/:id").put(productController.updateProduct);
productRouter.route("/product/:id").delete(productController.deleteProduct);


module.exports = productRouter;
