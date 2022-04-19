import React, { Component } from 'react'
import axios  from 'axios';
import { Button} from "react-bootstrap";


export class photo extends Component {
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
        <div class="container py-3">
        <div class="title h1 text-center">{name}</div>
        
            <hr/>
       
      
      
      <div class="container" style={{ paddingBottom:"10%"}}>
        
      
       
          <div class="card float-right">
            <div class="row">
            <div class="col-md-4 list-image">
                  
                <img class="d-block w-100" src={image} style={{ width: "100%", height: "100%" }} alt={name}/>
              </div>
              
              <div class="col-md-4">
                
              
                    
                    <h2 class="rate-title" style={{textAlign: "left" , paddingTop:"20px"}}> Vehicle Details</h2>
                    <div class="block-rate"><div>
                      </div></div>

                      <div class="block1">
                      
                        <div class="labels"><i class="fa fa-car" aria-hidden="true"></i> Vehicle Type</div>
                        <div class="labels"><i class="fa fa-male"></i>  Seating Capacity</div>
                        <div class="labels"><i class="fa fa-tint"></i>  Fuel Type</div>
                        <div class="labels">
                        <i class="fa fa-cog"></i>Transmission</div>
                        
                          </div>

                          <div class="block2">
                            <div class="field">: {type}</div>
                            <div class="field">: {capacity}</div>
                            <div class="field">: {fuelType}</div>
                            <div class="field">: {transmission}</div>
                            
                            </div>


                        <Button
                          variant="success"
                          style={{ marginTop: "60px", marginBottom: "20px" ,marginRight:"10px"}}
                          title="Show All Vehicle"
                          onClick={() => this.props.history.push(`/home`)}>
                            <i class='fa fa-backward'></i>&nbsp; Back

                        </Button>

                     <Button

                        className="btn btn-success"
                        type="submit"
                        style={{ marginTop: "60px", marginBottom: "20px", marginRight:"10px" }}
                        title="Book A Vehicle"
                        onClick={this.onSubmit}>
                      
                        <i className="fa fa-car"></i>&nbsp; Select Vehicle
            
                     </Button>

          
               </div>

               <div class="col-md-4">
                  <h2 class="rate-title" style={{textAlign: "left", paddingTop:"20px"}}> Vehicle Rate</h2>
                  <div class="block-rate"><div>
                      </div></div>
                      <div class="block1">
                        <div class="labels">For A Day</div>
                        <div class="labels">For A Week</div>
                        
                          </div>
                          <div class="block2">
                            <div class="field">: Rs. {rateper}.00</div>
                            <div class="field">: Rs. {rateweek}.00</div>
                            
                            </div>

                   
                 </div>
                

                 </div>
          </div>
        </div>
       
      </div>
       
    )
  }
}

export default photo
