import React, { Component } from 'react'
import axios from 'axios';

export default class Home extends Component {

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
      <div>
        {this.state.cars.map((cars,index) =>(
             <div className='card' style={{width: '18rem'}}>
                <img className="card-img-top" src={cars.image}></img>
                <div className="card-body">
                <h4 className="card-title"> {cars.name}</h4>
                <button className='btn btn-success' type='submit' style={{marginTop:'15px', marginBottom: '20px',color:'white'}}><a href={`/car/${cars._id}`} style={{textDecoration:'none'}}>
            &nbsp; More</a>
          </button>
          </div>
            

         
            </div>
        ))};
      </div>
    )
  }
}
