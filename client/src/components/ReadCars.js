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
      <div className='container'>
       <div className="row">
          <div className='col-lg-9 mt-2 mb-2'>
            <h4>All Cars</h4>
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
        <table className="table">
          <thead>

            <tr>
              <th scope="col">#</th>
              <th scope="col">Vehicle Name</th>
              <th scope="col">Type</th>
              <th scope="col">Seating Capacity</th>
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
                <td ><img src={cars.image}  style={{width:'200px' , height:'100px'}}></img></td>
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
