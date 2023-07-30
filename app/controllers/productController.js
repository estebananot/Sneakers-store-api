// app/controllers/productController.js
const Product = require("../models/Product");
const productService = require("../services/productService");
// Controlador para obtener todos los productos en stock
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ enStock: true });
    res.json(products);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error al obtener los productos en stock." });
  }
};

// Controlador para obtener el precio especial para un cliente y una marca específica
exports.getProductPrice = async (req, res) => {
  try {
    const { user_id, nombre_producto } = req.params;

    // Obtener el precio especial para el cliente y la marca específica
    const price = await productService.getProductPriceForClient(
      user_id,
      nombre_producto
    );

    res.json({ price });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
