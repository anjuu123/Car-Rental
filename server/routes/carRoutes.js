const express = require("express");
const router = express.Router();

const Car = require("./../models/carModel");

router.get("/getallcars", (req,res) => {
Car.find({})
.then((cars) => {
    res.json({
        status:200,
        car:Car,
    });
});
})


module.exports = router;