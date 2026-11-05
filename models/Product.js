import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  category: { type: String, required: true, enum: ["bike", "cycle"] },
  price: { type: Number, required: true, min: 0 },
  image: { type: String, required: true }, // Data URL; uploads are limited to 2 MB.
});

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
