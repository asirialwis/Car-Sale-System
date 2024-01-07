const mongoose = require("mongoose");
const schema = mongoose.Schema;

const carSchema = new schema({
  carNumber: {
    type: String,
    required: true,
  },
  carModel: {
    type: String,
    required: true,
  },
  madeYear: {
    type: Number,
    required: true,
  },
});

const car = mongoose.model("car", carSchema);

module.exports = car;
