const mongoose = require("mongoose");
const URLSlugs = require("mongoose-url-slugs");

const productTaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
});
// productTaskSchema.plugin(URLSlugs("name", { field: "slug", update: true }));
module.exports = mongoose.model("productTaskSchema", productTaskSchema);
