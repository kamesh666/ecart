const mongoose = require("mongoose");

const connectDB = () => {
  const uri = process.env.MONGO_URI;
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(`MongoDB is connected to the host: ${con.connection.host} `);
    });
};

module.exports = { connectDB };
