const router = require("express").Router();

const carController = require("./../controllers/carController");

router.route("/").get(carController.getAllCars);
router.route("/addcar").post(carController.addCar);
router.route("/getcar/:carModel").get(carController.getCar);
router.route("/updatecar/:id").put(carController.updateCar);


module.exports = router;
