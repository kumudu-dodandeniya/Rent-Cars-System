import React, { Component } from "react";
import axios from "axios";
import { Button , InputGroup, Form} from "react-bootstrap";

export default class CreateCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      transmission: "",
      type: "",
      image: "",
      capacity: "",
      rateper: "",
      fuelType: "",
      rateweek: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const {
      name,
      transmission,
      type,
      image,
      capacity,
      rateper,
      fuelType,
      rateweek,
    } = this.state;

    const data = {
      name: name,
      transmission: transmission,
      type: type,
      image: image,
      capacity: capacity,
      rateper: rateper,
      fuelType: fuelType,
      rateweek: rateweek,
    };
    console.log(data);

    axios.post("/car/save", data).then((res) => {
      if (res.data.success) {
        alert("New Vehicle Added Successfull");
        this.setState({
          name: "",
          transmission: "",
          type: "",
          image: "",
          capacity: "",
          rateper: "",
          fuelType: "",
          rateweek: "",
        });
      }
    });
  };

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Add New Vehicle</h1>
        <form className="form">
          <div className="row">
            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Vehicle Name</label>
              
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter Vehicle Name"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
                pattern="[a-z]{1,15}"
                
              >
                
              </input>
              
            </div>

            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Transmission</label>

              <input
                type="text"
                className="form-control"
                name="transmission"
                placeholder="Enter Transmission"
                value={this.state.transmission}
                onChange={this.handleInputChange}
                required
              ></input>
            </div>
          </div>

          <div className="row">
            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Vehicle Type</label>
              <input
                type="text"
                className="form-control"
                name="type"
                placeholder="Enter Vehicle Type"
                value={this.state.type}
                onChange={this.handleInputChange}
                required
              ></input>
              
            </div>

            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Image URL</label>
              <input
                type="text"
                className="form-control"
                name="image"
                placeholder="Enter Vehicle Image URL"
                value={this.state.image}
                onChange={this.handleInputChange}
                required
              ></input>
            </div>
          </div>

          <div className="row">
            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Seatting Capacity</label>
              <input
                type="number"
                className="form-control"
                name="capacity"
                placeholder="Enter Seat Capacity"
                
                value={this.state.capacity}
                onChange={this.handleInputChange}
                required
                size="2"
                min="1" max="10"
                
              ></input>
            </div>

            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Rate Per Day</label>
              <input
                type="text"
                className="form-control"
                name="rateper"
                placeholder="Enter Rate Per Day"
                value={this.state.rateper}
                onChange={this.handleInputChange}
                required
                pattern="\d*" title="Numbers only, please."
              ></input>
            </div>
          </div>

          <div className="row">
            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Fuel Type</label>
              <input
                type="text"
                className="form-control"
                name="fuelType"
                placeholder="Enter Fuel Type"
                value={this.state.fuelType}
                onChange={this.handleInputChange}
                required
              ></input>
            </div>

            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Rate Per Week</label>
              <input
                type="text"
                className="form-control"
                name="rateweek"
                placeholder="Enter Rate Per Week"
                value={this.state.rateweek}
                onChange={this.handleInputChange}
                required
              ></input>
            </div>
          </div>
          <Button
                    variant="success"
                    style={{ marginTop: "15px", marginBottom: "20px",marginRight:"10px" }}
                    title="Show All vehicles Details"
                    onClick={() => this.props.history.push(`/`)}

                  >
                    <i class='fa fa-backward'></i>&nbsp;
                    Back
                  </Button>
          <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px", marginBottom: "20px", marginRight:"10px" }}
            title="Save New Vehicle"
            onClick={this.onSubmit}
          >
            <i className="fa fa-save"></i>&nbsp; Save
           
          </button>

          
        </form>
      </div>
    );
  }
}
