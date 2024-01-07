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

module.exports = { addCar };