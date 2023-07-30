// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  id_marca: { type: mongoose.Schema.Types.ObjectId, ref: "Brand", required: true },
  precioBase: { type: Number, required: true, min: 0 },
  enStock: { type: Boolean, default: true },
  specialPrices: { type: Map, of: Number },
});

module.exports = mongoose.model("Product", productSchema);
