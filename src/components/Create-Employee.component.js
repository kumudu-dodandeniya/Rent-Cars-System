import React, { Component } from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react'

import "react-datepicker/dist/react-datepicker.css";

export default class CreateEmployee extends Component {
    constructor(props) {
        super(props);


        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeContactNo = this.onChangeContactNo.bind(this);
        this.onChangeSalary = this.onChangeSalary.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeJobTitel = this.onChangeJobTitel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Name: '',
            Email: '',
            Address: '',
            ContactNo: '',
            Salary: '',
            Gender: '',
            JobTitel: '',
            Employee: []
        }
    }


    onChangeName(e) {
        this.setState({
            Name: e.target.value
        })
    }

   

    onChangeEmail(e) {
            this.setState({
                Email: e.target.value
            })
        }
        
    onChangeAddress(e) {
        this.setState({
            Address: e.target.value
        })
    }

   

    onChangeContactNo(e) {
        this.setState({
            ContactNo: e.target.value
        })
    }

    

    onChangeSalary(e) {
        this.setState({
            Salary: e.target.value
        })
    }


    onChangeGender(e) {
        this.setState({
            Gender: e.target.value
        })
    }

    onChangeJobTitel(e) {
        this.setState({
            JobTitel: e.target.value
        })
    }



    

    onSubmit(e) {
        e.preventDefault();

        const Employee = {
            Name: this.state.Name,
            Email: this.state.Email,
            Address: this.state.Address,
            ContactNo: this.state.ContactNo,
            Salary: this.state.Salary,
            Gender: this.state.Gender,
            JobTitel: this.state.JobTitel
        }

        console.log(Employee);

        axios.post('http://localhost:5000/Employee/add', Employee)
            .then(res => console.log(res.data));


        swal({
                title: "Done!",
                text: "Employee Successfully Added",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/');
            });

        // window.location = '/create';

    }

    render() {
        return ( <div >
            <h3 > New Employee </h3> <form onSubmit = { this.onSubmit } >
            <div className = "form-group" style = { { marginBottom: '15px' }} >

            <label style = {{ marginBottom: '5px' }} > Name </label> 
            <input type = "text"
            required className = "form-control"
            name = "Name "
            placeholder = "Enter Name"
            value = { this.state.Name }
            onChange = { this.onChangeName }/> </div >
            <div className = "form-group" >

            <label > Email: </label> 
            <input type = "email"
            required className = "form-control"
            name = "Email"
            placeholder = "Email"
            value = { this.state.Email }
            onChange = { this.onChangeEmail }/> </div > 
            <div className = "form-group" >

            <label > Address: </label> 
            <input type = "text"
            required className = "form-control"
            name = "Address"
            placeholder = "Enter Address"
            value = { this.state.Address }
            onChange = { this.onChangeAddress }/></div >

             <div className = "form-group" >
            <label > ContactNo: </label>
            <input type = "Number"
            required className = "form-control"
            name = "ContactNo"
            placeholder = "Enter Contact No"
            value = { this.state.ContactNo }
            onChange = { this.onChangeContactNo }/>
             </div >

             <div className = "form-group" >
            <label > Gender: </label> 
            <select ref = "Genderinput"
            placeholder = "Gender"
            required className = "form-control"
            value = { this.state.Gender }
            onChange = { this.onChangeGender } >
            <option value = "Male" > Male </option> 
            <option value = "Female " > Female </option>
            </select > </div>

            <div className = "form-group" >
            <label > JobTitel: </label> 
            <input type = "text"
            required className = "form-control"
            name = "JobTitel"
            placeholder = "Enter JobTitel"
            value = { this.state.JobTitel }
            onChange = { this.onChangeJobTitel }/> </div >
           

            <div className = "form-group" >
            <label > Salary: </label> 
            <input type = "Number"
            required className = "form-control"
            name = "Salary"
            placeholder = "Enter Salary"
            value = { this.state.Salary }
            onChange = { this.onChangeSalary }/> </div >
            <div className = "form-group" >
            <input type = "submit"
            value = "Create New Employee"
            className = "btn btn-primary"/ >
            </div>
            
             </form > </div>
        )
    }
}