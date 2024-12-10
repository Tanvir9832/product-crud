const mongoose = require("mongoose");

exports.databaseConnection = async () => {
  try {
    console.log(process.env.DATABASE_URL)
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected!");
  } catch (error) {
    console.log(error.message || "database connection failed");
  }
};
