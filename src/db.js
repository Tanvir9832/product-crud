const mongoose = require("mongoose");

exports.databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("database connected!");
  } catch (error) {
    console.log(error.message || "database connection failed");
  }
};
