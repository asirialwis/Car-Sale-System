const router = require("express").Router();

const carController = require("./../controllers/carController");

router.route("/addcar").post(carController.addCar);

module.exports = router;
