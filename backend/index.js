const express = require("express");
const cors = require("cors");
const path = require("path");
const auth = require("./routes/userRouter");
const product = require("./routes/productRouter");
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./config/database");
const log = console.log;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

connectDB();

module.exports = { connectDB };

// Routers
// authentication Routes
app.use("/api", auth);
// product Routes
app.use("/api", product);

app.use((req, res, next) => {
  log(`${req.method} and ${req.path} and ${req.hostname}`);
  next();
});

// secret api route
app.get("/api/secret", (req, res) => {
  res.send("The password is potato");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

const PORT = 3002;

app.listen(PORT, () => {
  console.log(`example app running http://localhost:${PORT}`);
});
