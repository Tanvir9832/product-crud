import mongoose from "mongoose";

export const databaseConnection = async () => {
  try {
    await mongoose.connect();
    console.log("database connected!");
  } catch (error) {
    console.log(error.message || "database connection failed");
  }
};
