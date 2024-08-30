import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    name: { type: String}
  },
  { timestamps: true }
);

const categoryModel = mongoose.model('Category',categorySchema);

export default categoryModel;
