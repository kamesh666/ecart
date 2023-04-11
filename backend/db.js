const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI;

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
