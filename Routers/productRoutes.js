const express = require("express");
const productRoutes = express.Router();

const createProducts = require("../Controllers/productController");

productRoutes.get("/", createProducts);

module.exports = productRoutes;
