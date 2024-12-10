const mongoose = require("mongoose");

exports.databaseConnection = async () => {
  try {
    await mongoose.connect(
      process.env.DATABASE_URL ||
        "mongodb+srv://dadubari2023:12345678abcDEF@atlascluster.bkiupxh.mongodb.net/productCrud",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("database connected!");
  } catch (error) {
    console.log(error.message || "database connection failed");
  }
};
