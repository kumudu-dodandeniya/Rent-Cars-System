const router = require('express').Router();
let Employee = require('../models/Employee.model');

router.route('/').get((req, res) => {
    Employee.find()
        .then(Employee => res.json(Employee))
        .catch(Employee => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

    const Name = req.body.Name;
    const Email = req.body.Email;
    const Address = req.body.Address;
    const ContactNo = req.body.ContactNo;
    const Salary = req.body.Salary;
    const Gender = req.body.Gender;
    const JobTitel = req.body.JobTitel;



    const newEmployee = new Employee({
        Name,
        Email,
        Address,
        ContactNo,
        Salary,
        Gender,
        JobTitel,

    });



    newEmployee.save()
        .then(() => res.json('Employee added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Employee.findById(req.params.id)
        .then(Employee => res.json(Employee))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json('Employee deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Employee.findById(req.params.id)
        .then(Employee => {
            Employee.Name = req.body.Name;
            Employee.Email = req.body.Email;
            Employee.ContactNo = req.body.ContactNo;
            Employee.Salary = req.body.Salary;
            Employee.Gender = req.body.Gender;
            Employee.Address = req.body.Address;
            Employee.JobTitel = req.body.JobTitel;



            Employee.save()
                .then(() => res.json('Employee updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;