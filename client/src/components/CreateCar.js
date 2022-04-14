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
        <form>
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
                pattern = "[0-9]{10}"
                value={this.state.capacity}
                onChange={this.handleInputChange}
                required
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

          <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px", marginBottom: "20px", marginRight:"10px" }}
            title="Save New Car"
            onClick={this.onSubmit}
          >
            <i className="fa fa-car"></i>&nbsp; Save
           
          </button>

          <Button
                    variant="success"
                    style={{ marginTop: "15px", marginBottom: "20px" }}
                    title="Show All Cars Details"
                    onClick={() => this.props.history.push(`/`)}

                  >
                    Back
                  </Button>
        </form>
      </div>
    );
  }
}
