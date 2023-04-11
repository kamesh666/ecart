const router = require("express").Router();
const { newProduct } = require("../controllers/productController");

router.post("/product/new", newProduct);

module.exports = router;
