// app/services/productService.js

const Product = require("../models/Product");
const Client = require("../models/Client");

// Servicio para obtener todos los productos en stock
exports.getAllProductsInStock = async () => {
  return Product.find({ inStock: true });
};

// Servicio para obtener el precio especial para un cliente y una marca específica
exports.getProductPriceForClient = async (user_id, productName) => {
  const product = await Product.findOne({ nombre: productName });

  if (!product) {
    throw new Error("Producto no encontrado.");
  }

  const client = await Client.findById(user_id);

  if (client) {
    const brandIds = client.brands.map((brand) => brand.toString());

    if (brandIds.includes(product.id_marca.toString())) {
      const specialPrice = product.specialPrices;
      console.log(specialPrice);
      if (specialPrice) {
        return specialPrice;
      }
    }
  }

  return product.precioBase;
};
