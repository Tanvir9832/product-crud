const express = require("express");
const { databaseConnection } = require("./src/db");
const app = express();
require("dotenv").config("../env");
const cors = require("cors");
const productRouter = require("./src/router");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use("/api", productRouter);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html")),
    function (err) {
      res.status(500).send(err);
    };
});

databaseConnection();
app.listen(process.env.PORT || 4000, () => {
  console.log("server is started!");
});
