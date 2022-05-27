const express = require("express");
const router = express.Router();

const Car = require("./../models/carModel");

router.get("/getallcars", (req,res) => {
Car.find({}).then((item) => {
    res.json({
        status:200,
        Car:Car,
    });
    })
})


module.exports = router;