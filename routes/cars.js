const express = require ("express");
const cars = require("../models/cars");
const Cars = require('../models/cars')
const router = express.Router();

//save cars
router.post('/car/save', (req,res) => {

    let newCar = new Cars(req.body);

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

//get cars
router.get("/cars", (req, res) => {
    Cars.find().exec((err,cars) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        } 
        return res.status(200).json({
            success: true,
            existingCars:cars
        });
    });
    
});

//get a specific car
router.get('/car/:id', (req, res) =>{
    let carId = req.params.id;

    Cars.findById(carId,(err,car) => {
        if(err){
            return res.status(400).json({
                success:false
            });
        } 
        return res.status(200).json({
            success: true,
            car
        });

    });
});



//update cars
router.put('/cars/update/:id', (req, res) => {
    Cars.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,cars) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        } 
        return res.status(200).json({
            success: "Update Succesfully"
            
        });
    });
    
});

//delete cars
router.delete("/cars/delete/:id", (req, res) => {
    Cars.findByIdAndRemove(req.params.id).exec((err,deleteCar) =>{
        if(err){
            return res.status(400).json({
                message: "Delete unsuccesful",err
            });
        } 
        return res.status(200).json({
            success: true,
            message: "Delete succesful",deleteCar
        });
    });
    
});



module. exports = router;
