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


    EmployeeList() {
        return this.state.Employee.map(currentEmployee => {
            return <Employee Employee = { currentEmployee }
            deleteEmployee = { this.deleteEmployee }
            key = { currentEmployee._id }
            />;
        })
    }

    handleSearchArea = (e) => {

        const searchKey = e.currentTarget.value;

        axios.get('http://localhost:5000/Employee/').then(response => {


            const resultt = response.data
            const result = resultt.filter((props) =>
                props.Name.includes(searchKey)
            )

            this.setState({ Employee: result })

        });

    }

    render() {return (
         <div className = "container" >
            <div className = "row" >
            <div className = "col-lg-9 mt-2 mb-2" >
            <h4 > Employee List </h4> </div >
            <div className = "col-lg-3 mt-2 mb-2" >
            <input className = "form-control" type = "search" placeholder = "Search" name = "searchQuery"
            onChange = { this.handleSearchArea } ></input> 
            </div > 
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
            < th > Action </th> 
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
                     <td >
                <Link to = { "/edit/" + props._id } > Edit </Link> | 
                 <a href = "" onClick = {() => {this.deleteEmployee(props._id);}} >Delete</a> </td></tr>
                )

            }

            </tbody> </table ></div>
        )
    }
}