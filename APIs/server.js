const express = require("express");
const app = express();
const cors = require("cors");
const BodyParser = require("body-parser");
const carRouter = require("./routes/Cars");

app.use(cors());
app.use(BodyParser.json());
const PORT = process.env.PORT || 5000;

const mongoConnection = require("./connection/connect");

app.use("/car", carRouter);

app.listen(PORT, () => {
  console.log(`server is up & connect with port ${PORT}`);
});
