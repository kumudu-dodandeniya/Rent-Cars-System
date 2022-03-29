import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

export default class EditCar extends Component {
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
    const id = this.props.match.params.id;

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

    axios.put(`/car/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Car Details Updated Successfull");
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

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/car/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          name: res.data.car.name,
          transmission: res.data.car.transmission,
          type: res.data.car.type,
          image: res.data.car.image,
          capacity: res.data.car.capacity,
          rateper: res.data.car.rateper,
          fuelType: res.data.car.fuelType,
          rateweek: res.data.car.rateweek,
        });
        console.log(this.state.car);
      }
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">update New Vehicle</h1>
        <form>
          <div class="row">
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
              ></input>
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
              ></input>
            </div>
          </div>

          <div class="row">
            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Vehicle Type</label>
              <input
                type="text"
                className="form-control"
                name="type"
                placeholder="Enter Vehicle Type"
                value={this.state.type}
                onChange={this.handleInputChange}
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
              ></input>
            </div>
          </div>

          <div class="row">
            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Seatting Capacity</label>
              <input
                type="text"
                className="form-control"
                name="capacity"
                placeholder="Enter Seat Capacity"
                value={this.state.capacity}
                onChange={this.handleInputChange}
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
              ></input>
            </div>
          </div>

          <div class="row">
            <div className="col" style={{ marginBottom: "15px" }}>
              <label style={{ marginBottom: "5px" }}>Fuel Type</label>
              <input
                type="text"
                className="form-control"
                name="fuelType"
                placeholder="Enter Fuel Type"
                value={this.state.fuelType}
                onChange={this.handleInputChange}
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
              ></input>
            </div>
          </div>

          <Button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px", marginBottom: "20px", marginRight:"10px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>&nbsp; Save
          </Button>

          
                  
          <Button
                    variant="success"
                    style={{ marginTop: "15px", marginBottom: "20px" }}
                    onClick={() => this.props.history.push(`/`)}
                  >
                    Back
                  </Button>
        </form>
      </div>
    );
  }
}
