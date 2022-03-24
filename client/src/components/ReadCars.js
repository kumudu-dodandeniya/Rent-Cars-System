import React, { Component } from 'react'
import axios from 'axios';

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


  render() {
    return (
      <div className='container'>
        <p>All cars</p>
        <table className="table">
          <thead>

            <tr>
              <th scope="col">#</th>
              <th scope="col">Vehicle Name</th>
              <th scope="col">Type</th>
              <th scope="col">Capacity</th>
              <th scope="col">Fuel Type</th>
              <th scope="col">Transmission</th>
              <th scope="col">Image</th>
              <th scope="col">Rate Per Day</th>
              <th scope="col">Rate Per Week</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cars.map((cars,index) =>(
              <tr key={index}> 
                <th scope='row'>{index+1}</th>
                <td>
                  <a href={`/car/${cars._id}`} style={{textDecoration:'none'}}>
                  {cars.name}</a></td>
                <td>{cars.type}</td>
                <td>{cars.capacity}</td>
                <td>{cars.fuelType}</td>
                <td>{cars.transmission}</td>
                <td ><img src={cars.image}  style={{width:'100px' , height:'100px'}}></img></td>
                <td>{cars.rateper}</td>
                <td>{cars.rateweek}</td>

                <td>
                  <a className='btn btn-warning' href="#">
                    <i className='fas fa-edit'></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className='btn btn-danger' href="#">
                    <i className='fas fa-trash-alt'></i>&nbsp;Delete
                  </a>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>

        <button className='btn btn-success'><a href='/add' style={{textDecoration: 'none',color:'white'}}>Create New Car</a></button>
        
      </div>
    )
}
}
