const express = require("express");
const { databaseConnection } = require("./db");
const app = express();
require("dotenv").config("../env");
const cors = require("cors");
const productRouter = require("./router");

app.use(express.json());
app.use(cors());
app.use("/api/", productRouter);
app.use("*", (req, res) => {
  res.status(404).json({
    issue: "wrong url",
  });
});

databaseConnection();
app.listen(process.env.PORT || 4000, () => {
  console.log("server is started!");
});
