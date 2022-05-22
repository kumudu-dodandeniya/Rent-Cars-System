import React, { Component } from 'react'
import axios from 'axios'

export default class addpost extends Component{

  constructor(props){
    super(props);
    this.state={
      vehicleName:"",
      pickupDate: "",
      dropoffDay: "",
     
      noofPassengers: "",
      selfDriving:"",
      pickupLocation: "",
      getoffLocation: ""

    }
  }


  handleInputChange = (e) =>{
    const {name, value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }


  onSubmit = (e) => {

      e.preventDefault();

      const {vehicleName,pickupDate,dropoffDay,noofPassengers,selfDriving,pickupLocation,getoffLocation} = this.state;

      const data = {

        vehicleName:vehicleName,
        pickupDate:pickupDate,
        dropoffDay:dropoffDay,
        noofPassengers:noofPassengers,
        selfDriving:selfDriving,
        pickupLocation:pickupLocation,
        getoffLocation:getoffLocation
      }

      console.log(data)

      axios.post('/post/save',data).then((res) =>{
        if(res.data.success){
          this.setState(
            {
              vehicleName:"",
              pickupDate: "",
              dropoffDay: "",
           
              noofPassengers: "",
              selfDriving:"",
              pickupLocation: "",
              getoffLocation: ""
            }
          )
          
        }
      } )

  }


    render(){
      return (
        
      <div className='col-md-8 mt-4 mx-auto'>
        <h1 className='h3 mb-3 font-weight-normal d-flex justify-content-center'>ADD USER BOOKING</h1>
          <form className='form'>
          
          

            <div className='col' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Vehicle Name</label>
              <input type='text'
              className='form-control'
              name='vehicleName'
              placeholder='Enter Vehicle Name'
              value={this.state.vehicleName}
              onChange={this.handleInputChange}/>

            </div>
            <div className="row">
              <div className='col' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Pickup Date</label>
                <input type='date'
                className='form-control'
                name='pickupDate'
                value={this.state.pickupDate}
                onChange={this.handleInputChange}/>
              </div>

             
            </div>

            <div className='row'>
              <div className='col' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Drop Off Date</label>
                <input type='date'
                className='form-control'
                name='dropoffDay'
                value={this.state.dropoffDay}
                onChange={this.handleInputChange}/>
              </div>

              
            </div>
            

           

            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>No Of Passengers</label>
              <input type='number'
              className='form-control'
              name='noofPassengers'
              value={this.state.noofPassengers}
              onChange={this.handleInputChange}/>
            </div>

            
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Self Driving</label>
              <input type='String'
              className='form-control'
              name='selfDriving'
              value={this.state.selfDriving}
              onChange={this.handleInputChange}/>
            </div>
            
           
           
            <div className='row'>

              <div className='col' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Pickup Location</label>
                <input type='string'
                className='form-control'
                name='pickupLocation'
                value={this.state.pickupLocation}
                onChange={this.handleInputChange}/>
              </div>

              <div className='col' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Getoff Location</label>
                <input type='string'
                className='form-control'
                name='getoffLocation'
                value={this.state.getoffLocation}
                onChange={this.handleInputChange}/>
              </div>
            </div>


            <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px", marginBottom: "20px", marginRight:"10px", marginLeft:"300px" }}
            title="Save user booking"
            onClick={this.onSubmit}>
          
            <i className="far fa-check-square"></i>&nbsp; RESERVE
          </button>
          

           
          </form>
      </div>
       
    )
    }  
};