const Car = require("./../models/carDetails");

const addCar = async (req, res) => {
  const carNumber = req.body.carNumber;
  const carModel = req.body.carModel;
  const madeYear = Number(req.body.madeYear);

  const newCar = new Car({
    carNumber,
    carModel,
    madeYear,
  });

  await newCar
    .save()
    .then(() => {
      res.json("car added");
    })
    .catch((error) => {
      console.log(error);
    });
};

const getCar = async (req, res) => {
  let searchmodel = req.params.carModel;

  const result = await Car.collection
    .find({ carModel: { $regex: searchmodel, $options: "i" } })
    .toArray();

  
  if (result) {
    res.status(200).json(result);
  } else {
    res.status(400).json("Car not found");
  }
};

module.exports = { addCar, getCar };
