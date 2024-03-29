const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    createdBy: { type: ObjectId, ref: "User" },
    category: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
  },
  { timestamp: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
