// IMPORTS & GLOBAL VARIABLES
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = 'products';

// MIDDLEWARE
app.use(cors(), express.json(), express.urlencoded({extended:true}));

// CONNECT TO DB
require("./config/mongoose.config")(DB);

// CONNECT TO ROUTES
require("./routes/product.routes")(app);

// LISTENER
app.listen(PORT, () => {console.log(`==== SERVER IS RUNNING on localhost:${PORT} ====`)});
