const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require ('body-parser');

const app = express();

//import routes
const carRoutes = require('./routes/cars');

//app middleware
app.use(bodyParser.json());

//rote middleware
app.use(carRoutes);

const PORT = 8000;
 app.listen(PORT, () =>{
     console.log(`app is running on ${PORT}`);
 });

mongoose.connect("mongodb+srv://kumudu:kumudu1234@cluster1.rjapr.mongodb.net/cars?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology: true})
.then(() =>{
    console.log("Connected To Database");
})
.catch((error)=> console.log(error));