const mongoose = require('mongoose');
const { timeout } = require('nodemon/lib/config');
const postschema = new mongoose.Schema({

    vehicleName:{
        type:String,
        required:true
    },

    pickupDate:{

        type:String,
        required:true
    },


    dropoffDay:{

        type:String,
        required:true
    },

  

    noofPassengers:{
        type:Number,
        required:true
    },

  

    pickupLocation:{

        type:String,
        required:true
    },

    getoffLocation:{

        type:String,
        required:true
    }

    
});



module.exports = mongoose.model('Posts', postschema);
