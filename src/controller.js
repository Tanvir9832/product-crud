const Product = require("./model");

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    if (!product) throw new Error("Product created failed");
    return res
      .status(200)
      .json({ message: "product created successful", data: product });
  } catch (error) {
    return res
      .status(500)
      .json({ issue: error.message || "Product created failed" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) throw new Error("Products get failed");
    return res.status(200).json({ data: products });
  } catch (error) {
    return res
      .status(500)
      .json({ issue: error.message || "Products get failed" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ issue: "Product not found" });
    }

    return res
      .status(200)
      .json({ message: "product updated successfully", updatedProduct });
  } catch (error) {
    return res.status(500).json({ issue: error.message || "product update failed" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.json({ message: "Product deleted successfully", deletedProduct });
  } catch (error) {
    return res.status(500).json({ issue: error.message || "product deleted failed" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
