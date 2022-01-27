// IMPORTS
const Product = require("../models/product");

module.exports = {
    // === CREATE ===
    createProduct : (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.status(400).json({error: err}))
    },

    // === RETRIEVE ===
    retrieveAllProducts : (req, res) => {
        Product.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => res.json({error: err}))
    },

    retrieveOneProduct : (req, res) => {
        Product.findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => res.json({error: err}))
    },

    // === UPDATE ===
    
    // === DELETE ===
}