const router = require("express").Router();

const carController = require("./../controllers/carController");

router.route("/addcar").post(carController.addCar);
router.route("/getcar/:carModel").get(carController.getCar);

module.exports = router;
