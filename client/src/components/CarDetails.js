import React, { Component } from 'react'
import axios  from 'axios';

export default class CarDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            car: {}
        };
    }

    componentDidMount(){

        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/car/${id}`).then((res) => {
            if(res.data.success){
                this.setState({
                    car:res.data.car
                });
                console.log(this.state.car);
            }
        })
    }

 render() {

    const {name,type,capacity,fuelType,transmission,image,rateper,rateweek} = this.state.car;
    return (
       
      <div style={{marginTop:'20px'}}>
        <h4>{name}</h4>
        <hr/>

        <d1 className="row">
            <dt className='col-sm-3'>Vehicle Type</dt>
            <dd className='col-sm-9'>{type}</dd>

            <dt className='col-sm-3'>Capacity</dt>
            <dd className='col-sm-9'>{capacity}</dd>

            <dt className='col-sm-3'>Fuel Type</dt>
            <dd className='col-sm-9'>{fuelType}</dd>

            <dt className='col-sm-3'>Transmission</dt>
            <dd className='col-sm-9'>{transmission}</dd>

            <dt className='col-sm-3'>Rate Per Day</dt>
            <dd className='col-sm-9'>{rateper}</dd>

            <dt className='col-sm-3'>Rate Per Week</dt>
            <dd className='col-sm-9'>{rateweek}</dd>

            
            
          

            

        </d1>

        
      </div>
      
    )
  }
}
