import React, { Component } from 'react'


export default class add000 extends Component{

  constructor(props){
    super(props);
    this.state={
      firstName:"",
      lastName: "",
      address: "",
      contactNumber: "",
      nic:"",
      email: ""

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

      const {firstName,lastName,address,contactNumber,nic,email} = this.state;

      const data = {

        firstName:firstName,
        lastName:lastName,
        address:address,
        contactNumber:contactNumber,
        nic:nic,
        email:email,
        
      }

      console.log(data)

      axios.post('/post/save',data).then((res) =>{
        if(res.data.success){
          this.setState(
            {
              firstName:"",
              lastName: "",
              addpost: "",
              contactNumber: "",
              nic:"",
              email: "",
              
            }
          )
          
        }
      })

  }


    render(){
      return (
        
      <div className='col-md-8 mt-4 mx-auto'>
        <h1 className='h3 mb-3 font-weight-normal d-flex justify-content-center'>CUSTOMER DETAILS</h1>
          <form className='form'>
          
          

            <div className='col' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>First Name</label>
              <input type='text'
              className='form-control'
              name='firstName'
              placeholder='Enter First Name'
              value={this.state.firstName}
              onChange={this.handleInputChange}/>

            </div>
            <div className="row">
              <div className='col' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Last Name</label>
                <input type='text'
                className='form-control'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleInputChange}/>
              </div>

             
            </div>

            <div className='row'>
              <div className='col' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Address</label>
                <input type='text'
                className='form-control'
                name='address'
                value={this.state.address}
                onChange={this.handleInputChange}/>
              </div>

              
            </div>
            

           

            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Contact Number</label>
              <input type='number'
              className='form-control'
              name='contactNumber'
              value={this.state.contactNumber}
              onChange={this.handleInputChange}/>
            </div>

            
            <div className='form-group' style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>NIC</label>
              <input type='String'
              className='form-control'
              name='nic'
              value={this.state.nic}
              onChange={this.handleInputChange}/>
            </div>
            
           
           
            <div className='row'>

              <div className='col' style={{marginBottom:'15px'}}>
                <label style={{marginBottom:'5px'}}>Email Address</label>
                <input type='text'
                className='form-control'
                name='email'
                value={this.state.email}
                onChange={this.handleInputChange}/>
                </div>
            </div>

            <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px", marginBottom: "20px", marginRight:"10px", marginLeft:"300px" }}
            title="Save customer details"
            onClick={this.onSubmit}>
          
            <i className="far fa-check-square"></i>&nbsp; CONFIRM RESERVATION
          </button>
          

           
          </form>
      </div>
       
    )
    }  
};