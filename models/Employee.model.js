const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const StockSchema = new Schema({
    Name: { type: String, required: true },
    Email: { type: String, required: true },
    Address: { type: String, required: true },
    ContactNo: { type: Number, required: true },
    Salary: { type: Number, required: true },
    Gender: { type: String, required: true },
    JobTitel: { type: String, required: true },


}, {
    timestamps: true,
});



const Employee = mongoose.model('Employee', StockSchema);

module.exports = Employee;