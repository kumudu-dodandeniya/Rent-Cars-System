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
    <div className="container text-center list vehicle">
      <div className='row'>
            <div className='col-md-12'>
            <h4 style={{marginTop:'20px'}}>{name}</h4>
            <hr/>
            <img className="card-img-top" src={image} style={{maxWidth:'100%' , maxHeight:'auto', verticalAlign:'middle', borderStyle:'none'}}></img>
            </div>
            </div>

        <d1 className="row">
            <h4>Vehicle Details</h4>
            <dt className='col-sm-3'>Vehicle Type</dt>
            <dd className='col-sm-9'>{type}</dd>

            <dt className='col-sm-3'>Seating Capacity</dt>
            <dd className='col-sm-9'>{capacity}</dd>

            <dt className='col-sm-3'>Fuel Type</dt>
            <dd className='col-sm-9'>{fuelType}</dd>

            <dt className='col-sm-3'>Transmission</dt>
            <dd className='col-sm-9'>{transmission}</dd>

            </d1>
            <h4>Rate</h4>
            <d1 className="row">
            <dt className='col-sm-3'>For A Day</dt>
            <dd className='col-sm-9'>{rateper}</dd>

            <dt className='col-sm-3'>For A Week</dt>
            <dd className='col-sm-9'>{rateweek}</dd>

           

    </d1>

        
      </div>
      
    )
  }
}
