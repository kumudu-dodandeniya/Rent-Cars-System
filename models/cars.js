const mongoose = require('mongoose');

//const Schema = mongoose.Schema;

const carsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    capacity:{
        type: Number,
        required: true
    },
    fuelType:{
        type: String,
        required: true
    },
    transmission:{
        type: String,
        required: true
    },
    rateper:{
        type: Number,
        required: true
    },
    rateweek:{
        type: Number,
        required: true
    },

    
});

module.exports = mongoose.module("Cars", carsSchema);