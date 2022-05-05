import React, { Component } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table'
//import Table from '@material-ui/core/Table'; 
import { Button } from "react-bootstrap";





export default class ReadCars extends Component {

  constructor(props){
    super(props);

    this.state={
      cars:[]
    };
  }
  componentDidMount(){
    this.retrieveCars();
  }

  retrieveCars(){
    axios.get("http://localhost:8000/cars").then(res => {
      if(res.data.success){
        this.setState({
          cars:res.data.existingCars
        });

        console.log(this.state.cars);
      }
    });
  }

  onDelete = (id) =>{

    axios.delete(`cars/delete/${id}`).then((res) =>{
      alert("deleted successfully");
      this.retrieveCars();
    })
  }
  

  filterData(cars,searchkey){
    const result = cars.filter((car) =>
    car.name.toLowerCase().includes(searchkey)
    )
    
    this.setState({cars:result})
  }

  handleSearchArea = (e) => {
    const searchkey = e. currentTarget.value;

    axios.get("http://localhost:8000/cars").then(res =>{
      if(res.data.success){
        this.filterData(res.data.existingCars,searchkey)
      }
    });
  }


 





  render() {
    return (
      <div  id="pdfdiv" style={{padding:"40px"}} >
       <div className="row" style={{paddingBottom:"40px"}}>
          <div className='col-lg-9 mt-2 mb-2'>
            <h2>All Vehicle</h2>
          </div>

          <div className='col-lg-3 mt-2 mb-2'>
            <input 
            className='form-control'
            type="search"
            placeholder='Search'
            name='searchQuery'
            onChange={this.handleSearchArea}></input>
          </div>

            
        </div>
        <Table striped bordered hover size="sm" style={{paddingTop:"40px"}}>
          <thead >

            <tr >
              <th scope="col">#</th>
              <th scope="col">Vehicle Name</th>
              <th scope="col">Type</th>
              <th scope="col">Seating Capacity</th>
              <th scope="col">Fuel Type</th>
              <th scope="col">Transmission</th>
              <th scope="col">Image</th>
              <th scope="col">Rate Per Day </th>
              <th scope="col">Rate Per Week</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody >
            {this.state.cars.map((cars,index) =>(
              <tr key={index} > 
                <th scope='row'>{index+1} </th>
                <td>{cars.name}</td>
                <td>{cars.type}</td>
                <td>{cars.capacity}</td>
                <td>{cars.fuelType}</td>
                <td>{cars.transmission}</td>
                <td ><img src={cars.image}  style={{width:'150px' , height:'100px'}}></img></td>
                <td>Rs.{cars.rateper}.00</td>
                <td>Rs.{cars.rateweek}.00</td>

                <td>
                  <a className='btn btn-warning' href={`/edit/${cars._id}`}  title="Change Vehicle Details">
                    <i className='fas fa-edit' ></i>&nbsp;Update
                    
                  </a>
                  &nbsp;
                  <a className='btn btn-danger'  onClick={() =>this.onDelete(cars._id)} title="Delete A Vehicle">
                    <i className='fas fa-trash-alt'></i>&nbsp;Delete
                  </a>

                  

                </td>
                
              </tr>
            ))}
          </tbody>
        </Table>

        
        
        <Button
                    variant="success"
                    style={{ marginTop: "15px", marginBottom: "20px" }}
                    title="Add New Vehicle Into The Vehicle Fleet"
                    onClick={() => this.props.history.push(`/add`)}
                  >
                    Add New Vehicle
                  </Button>

                  &nbsp;
                  <Button
                 
                  style={{ marginTop: "15px", marginBottom: "20px" }}
                  title="Generate vehicle details pdf"
                   onClick={() => this.props.history.push(`/generate`)} variant="success" color="primary">  
                  Generate Pdf  
                                </Button> 
      </div>
    )
}
}
