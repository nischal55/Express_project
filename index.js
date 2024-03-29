const express = require("express");
const app = express();

require("dotenv").config();
require("./config/database");

app.use(express.json());

const productRoutes = require("./Routers/productRoutes");
const userRoutes = require("./Routers/userRoutes");

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.listen(8000);
