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
    updateProduct : (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then((revisedProduct) => {
                res.json(revisedProduct)
            })
            .catch(err => res.json({error: err}))
    },

    // === DELETE ===
    deleteProduct : (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json({error: err}))
    }
}