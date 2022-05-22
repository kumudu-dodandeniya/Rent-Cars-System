import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




const Employee = props => ( <tr >
    <td > { props.Employee.Name } </td> 
    <td > { props.Employee.Email } </td>
    <td > { props.Employee.Address } </td> 
    <td > { props.Employee.ContactNo } </td> 
    <td > { props.Employee.Salary } </td> 
    <td > { props.Employee.Gender } </td> 
    <td > { props.Employee.JobTitel } </td> 
    <td ><Link to = { "/edit/" + props.Employee._id } > Edit </Link> | <a href=" " onClick={() => { props.deleteEmployee(props.Employee._id) }}>Delete</a > </td > 
    </tr> 
)

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);


        this.state = {
            Employee: []
        };
    }



    componentDidMount() {
        axios.get('http://localhost:5000/Employee/')
            .then(response => {
                this.setState({ Employee: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    getPosts() {
        axios.get('http://localhost:5000/Employee/')
            .then(response => {
                this.setState({ Employee: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    deleteEmployee(id) {
        if (window.confirm("Are you sure?")) {
            axios.delete("http://localhost:5000/Employee/" + id).then((response) => {
                console.log(response.data);
            });

            this.setState({
                Employee: this.state.Employee.filter((el) => el._id !== id),
            });
        }
    }


    Report (){ window.print();}


    EmployeeList() {
        return this.state.Employee.map(currentEmployee => {
            return <Employee Employee = { currentEmployee }
            deleteEmployee = { this.deleteEmployee }
            key = { currentEmployee._id }
            />;
        })
    }

    

    render() {return (
         <div className = "container" >
            <div className = "row" >
            <div className = "col-lg-9 mt-2 mb-2" >
            <h4 > Employee Report </h4> </div >
            
            </div> 
            <table className = "table" >
            <thead className = "thead-light" >
            <tr >
            <th > Name </th> 
            <th > Email </th> 
            <th > Address </th>
            <th > Contact No </th> 
            <th > Salary </th>
            < th > Gender </th> 
            < th > JobTitel </th> 
          
            </tr >
            </thead> <tbody > {this.state.Employee.map(props =>
                    <tr key = { props.id } >
                    <td > { props.Name } </td> 
                    <td > { props.Email } </td> 
                    <td > { props.Address } </td> 
                    < td > { props.ContactNo } </td>  
                    < td > { props.Salary } </td> 
                    < td > { props.Gender } </td>  
                    < td > { props.JobTitel } </td>
                     </tr>
                )

            }

            </tbody> </table >


            <div className = "container" >
           
            
            <input type = "Button"
            onClick = { this.Report }
            value = "Print"
            className = "btn btn-danger"/ >
            </div>
            
            
            </div>
        )
    }
}