// IMPORTS
const mongoose = require('mongoose');

// SCHEMA
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required!"],
        minlength: [3, "{PATH} must be at least 3 characters long!"]
    },
    price: {
        type: String,
        required: [true, "{PATH} is required!"],
        minlength: [1, "{PATH} must be at least 1!"]
    },
    description: {
        type: String,
        required: [true, "{PATH} is required!"],
        minlength: [5, "{PATH} must be at least 5 characters long!"]
    }
}, {timestamps:true})

// INSTANTIATE AND EXPORT SCHEMA
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;