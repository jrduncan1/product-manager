// IMPORTS
const Product = require("../controllers/product.controller");

module.exports = (app) => {
    app.get("/api/products", Product.retrieveAllProducts)
    app.post("/api/products", Product.createProduct)
    app.get("/api/products/:id", Product.retrieveOneProduct)
    app.put("/api/products/:id", Product.updateProduct)
    app.delete("/api/products/:id", Product.deleteProduct)
}