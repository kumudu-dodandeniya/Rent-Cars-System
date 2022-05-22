const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

//import routs
const postRoutes = require('./routs/posts');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middle ware
app.use(postRoutes);


const PORT = 8000;
const DB_URL = 'mongodb+srv://tt123:tt123@car.4kigr.mongodb.net/rentCar?retryWrites=true&w=majority';


mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error', err));


app.listen(PORT, () =>{
    console.log('App is running');
});