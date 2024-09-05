import productModel from "../models/productModel.js";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";

class ProductController {
    
    // Create a new product (static method)
    static async createProduct(req, res) {
        try {
            const { name, price, stock, category } = req.body;

            // Server-side validations
            if (!name || !price || !category) {
                if (req.file) {
                    fs.unlinkSync(req.file.path); // Remove the uploaded file if validation fails
                }
                return res.status(400).json({ message: "Name, Price, and Category are required fields." });
            }

            if (!mongoose.Types.ObjectId.isValid(category)) {
                if (req.file) {
                    fs.unlinkSync(req.file.path); // Remove the uploaded file if validation fails
                }
                return res.status(400).json({ message: "Invalid Category ID." });
            }

            const image = req.file ? `/uploads/${req.file.filename}` : null;

            const newProduct = new productModel({
                name,
                price,
                image,
                stock: stock || 0,
                category
            });

            await newProduct.save();

            return res.status(201).json({ message: "Product created successfully", product: newProduct });
        } catch (error) {
            if (req.file) {
                fs.unlinkSync(req.file.path); // Remove the uploaded file if an error occurs
            }
            return res.status(500).json({ message: "Error creating product", error: error.message });
        }
    }

    // Get all products (static method)
    static async getAllProducts(req, res) {
        try {
            const products = await productModel.find().populate("category");
            // console.log(products[0].category.name)
            return res.status(200).json(products);
        } catch (error) {
            return res.status(500).json({ message: "Error fetching products", error: error.message });
        }
    }

    // Get a single product by ID (static method)
    static async getProductById(req, res) {
        try {
            const product = await productModel.findById(req.params.id).populate("category");

            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }

            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json({ message: "Error fetching product", error: error.message });
        }
    }

    // Update a product by ID (static method)
    static async updateProduct(req, res) {
        try {
            const { name, price, stock, category } = req.body;

            // Server-side validations
            if (!name || !price || !category) {
                if (req.file) {
                    fs.unlinkSync(req.file.path); // Remove the uploaded file if validation fails
                }
                return res.status(400).json({ message: "Name, Price, and Category are required fields." });
            }

            if (!mongoose.Types.ObjectId.isValid(category)) {
                if (req.file) {
                    fs.unlinkSync(req.file.path); // Remove the uploaded file if validation fails
                }
                return res.status(400).json({ message: "Invalid Category ID." });
            }

            const existingProduct = await productModel.findById(req.params.id);
            if (!existingProduct) {
                if (req.file) {
                    fs.unlinkSync(req.file.path); // Remove the uploaded file if the product is not found
                }
                return res.status(404).json({ message: "Product not found" });
            }

            const image = req.file ? `/uploads/${req.file.filename}` : existingProduct.image;

            // Delete the old image if a new image is uploaded
            if (req.file && existingProduct.image) {
                const oldImagePath = path.join(process.cwd(), 'public', existingProduct.image);
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                }
            }

            const updatedProduct = await productModel.findByIdAndUpdate(
                req.params.id,
                {
                    name,
                    price,
                    image,
                    stock: stock || 0,
                    category
                },
                { new: true }
            );

            return res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
        } catch (error) {
            if (req.file) {
                fs.unlinkSync(req.file.path); // Remove the uploaded file if an error occurs
            }
            return res.status(500).json({ message: "Error updating product", error: error.message });
        }
    }

    // Delete a product by ID (static method)
    static async deleteProduct(req, res) {
        try {
            const product = await productModel.findById(req.params.id);

            if (!product) {
                return res.status(404).json({ message: "Product not found" });
            }

            // Delete the image file if it exists
            if (product.image) {
                const imagePath = path.join(process.cwd(), 'public', product.image);
                if (fs.existsSync(imagePath)) {
                    fs.unlinkSync(imagePath);
                }
            }

            await productModel.findByIdAndDelete(req.params.id);

            return res.status(200).json({ message: "Product deleted successfully" });
        } catch (error) {
            return res.status(500).json({ message: "Error deleting product", error: error.message });
        }
    }
}

export default ProductController;
