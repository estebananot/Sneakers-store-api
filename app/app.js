const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const productController = require("./controllers/productController");

//Configurar dotenv
dotenv.config();
// Establecer la conexión a la base de datos MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conexión a la base de datos exitosa");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error.message);
    process.exit(1); // Salir de la aplicación si hay un error en la conexión
  });

app.use(express.json());

// Rutas de la API

// Ruta para obtener todos los productos en stock
app.get("/products", productController.getAllProducts);

// Ruta para obtener el precio especial para un cliente y una marca específica
app.get("/price/:user_id/:nombre_producto", productController.getProductPrice);

// Manejador de errores
app.use((err, res) => {
  console.error(err.stack);
  res.status(500).json({ message: "Ha ocurrido un error en el servidor." });
});

module.exports = app;
