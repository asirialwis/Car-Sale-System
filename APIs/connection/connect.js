const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

require("dotenv").config();

const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("mongodb connection suucessful!");
});
connection.on("error", (err) => {
  console.log(`mongodb connection error ${err}`);
});

module.exports = connection;
