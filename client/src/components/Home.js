import React, { Component } from 'react'
import axios from 'axios'

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
            <h4 style={{textAlign: 'center'}}>Vehicle Fleet</h4>
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
      
        {this.state.cars.map((cars) =>(
             <div className='card' style={{width: '18rem'}}>
                <img className="card-img-top" src={cars.image}></img>
                <div className="card-body">
                <h4 className="card-title"> {cars.name}</h4>
                <button className='btn btn-success' type='submit' style={{marginTop:'15px', marginBottom: '20px',color:'white'}}><a href={`/car/${cars._id}`} style={{textDecoration:'none'}}>
            &nbsp; Read More</a>
          </button>
          </div>
            

         
            </div>
        ))};
      </div>
    )
  }
}
