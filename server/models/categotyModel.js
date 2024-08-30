import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    name: { type: String , trim: true},
  },
  { timestamps: true }
);

const categoryModel = mongoose.model('Category',categorySchema);

export default categoryModel;
