const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = "mongodb://127.0.0.1:27017/ecart";

  try {
    const conn = await mongoose.connect(uri, {
      // useUnifiedTopoligy: true,
      useNewUrlParser: true,
    });
    console.log(`mongodb connected: ${conn.connection.host}`);
    return conn;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { connectDB };
