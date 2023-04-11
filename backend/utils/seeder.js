const products = require("../data/product.json");
const Product = require("../models/productModel");
const { connectDB } = require("../db");
const log = console.log;
const dotenv = require("dotenv");

connectDB();
dotenv.config({ path: "./config/.env" });

const seeder = async () => {
  try {
    await Product.deleteMany();
    log("products deleted");
    await Product.insertMany(products);
    log("All products added");
  } catch (error) {
    log(error.message);
  }
};

seeder();
