import React, { Component } from 'react'
import axios from 'axios';

export default class CreateCar extends Component {

constructor(props){
  super(props);
  this.state={
    name:"",
    type:"",
    capacity:"",
    fuelType:"",
    transmission:"",
    rateper:"",
    rateweek:"",
    image:""

  }
}

handleInputChange =(e) =>{
  const {name,value} = e.target;
  this.setState({
    ...this.state,
    [name]:value
  })
}

onSubmit = (e) =>{
  e.preventDefault();

  const {name,type,capacity,fuelType,transmission,rateper,rateweek,image} = this.state;

  const data = {
    name:name,
    type:type,
    capacity:capacity,
    fuelType:fuelType,
    transmission:transmission,
    rateper:rateper,
    rateweek:rateweek,
    image:image
  }
  console.log(data)

  axios.post("/car/save", data).then((res)=>{
    if(res.data.success){
      this.setState(
        {
          name:"",
          type:"",
          capacity:"",
          fuelType:"",
          transmission:"",
          rateper:"",
          rateweek:"",
          image:""

        }
      )
    }
  })


}

  render() {
    return (
      <div className='col-md-8 mt-4 mx-auto'>
        <h1 className='h3 mb-3 font-weight-normal'>Add New Car</h1>
        <form className='need-validation' noValidate>
          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom:'5px'}}>Vehicle Name</label>
            <input type= "text"
            className='form-control'
            name='name'
            placeholder='Enter Vehicle Name'
            value={this.state.name}
            onChange={this.handleInputChange}></input>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom:'5px'}}>Vehicle Type</label>
            <input type= "text"
            className='form-control'
            name='type'
            placeholder='Enter Vehicle Type'
            value={this.state.type}
            onChange={this.handleInputChange}></input>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom:'5px'}}>Capacity</label>
            <input type= "text"
            className='form-control'
            name='capacity'
            placeholder='Enter Seat Capacity'
            value={this.state.capacity}
            onChange={this.handleInputChange}></input>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom:'5px'}}>Fuel Type</label>
            <input type= "text"
            className='form-control'
            name='fuelType'
            placeholder='Enter Fuel Type'
            value={this.state.fuelType}
            onChange={this.handleInputChange}></input>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom:'5px'}}>Transmission</label>
            
            <input type= "text"
            className='form-control'
            name='transmission'
            placeholder='Enter Transmission'
            value={this.state.transmission}
            onChange={this.handleInputChange}>
           
          </input>
            
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom:'5px'}}>Rate Per Day</label>
            <input type= "text"
            className='form-control'
            name='rateper'
            placeholder='Enter Rate Per Day'
            value={this.state.rateper}
            onChange={this.handleInputChange}></input>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom:'5px'}}>Rate Per Week</label>
            <input type= "text"
            className='form-control'
            name='rateweek'
            placeholder='Enter Rate Per Week'
            value={this.state.rateweek}
            onChange={this.handleInputChange}></input>
          </div>

          <div className='form-group' style={{marginBottom: '15px'}}>
            <label style={{marginBottom:'5px'}}>Image URL</label>
            <input type= "text"
            className='form-control'
            name='image'
            placeholder='Enter Vehicle Image URL'
            value={this.state.image}
            onChange={this.handleInputChange}></input>
          </div>

          <button className='btn btn-success' type='submit' style={{marginTop:'15px', marginBottom: '20px'}} onClick={this.onSubmit}>
            <i className='far fa-check-square'></i>&nbsp; Save
          </button>
        </form>
         
      </div>
    )
  }
}
