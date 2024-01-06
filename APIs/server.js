const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const BodyParser = require("body-parser");
require("dotenv").config();

app.use(cors());
app.use(BodyParser.json());
const PORT = process.env.PORT || 5000;

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("mongodb connection suucessful!");
});
connection.on("error", (err) => {
  console.log(`mongodb connection error ${err}`);
});

app.listen(PORT, () => {
  console.log(`server is up & connect with port ${PORT}`);
});
