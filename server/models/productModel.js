import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
    stock: { type: Number },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

export default productModel;
