const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

const productroutes = require("./routes/productroutes");
const cartroutes = require("./routes/cartroutes");

const errorHandler = require("./middleware/errorhandler");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/products", productroutes);
app.use("/cart", cartroutes);

app.get("/", (req, res) => {
    res.send("E-Commerce API Running...");
});

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});