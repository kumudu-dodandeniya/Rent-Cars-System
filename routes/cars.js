const express = require ("express");
const Cars = require('../models/cars')
const router = express.Router();

//save cars
router.post('/car/save', (req,res) => {

    let newCar = new Cars(req,body);

    newCar.save ((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        } 
        return res.status(200).json({
            success: "Cars saved successfull"
        });
    });
});

module. exports = 

router.get("/", (req, res, next) => {
    
})