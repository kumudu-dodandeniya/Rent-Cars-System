import React, { Component } from "react";
import axios from "axios";
import { Button, Card, Container, Col, Row, CardImg } from "react-bootstrap";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
    };
  }
  componentDidMount() {
    this.retrieveCars();
  }

  retrieveCars() {
    axios.get("http://localhost:8000/cars").then((res) => {
      if (res.data.success) {
        this.setState({
          cars: res.data.existingCars,
        });

        console.log(this.state.cars);
      }
    });
  }

  filterData(cars, searchkey) {
    const result = cars.filter((car) =>
      car.name.toLowerCase().includes(searchkey)
    );

    this.setState({ cars: result });
  }

  handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;

    axios.get("http://localhost:8000/cars").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingCars, searchkey);
      }
    });
  };

  render() {
    return (
      <Container>
        <Row xs={1}>
          <div className="col-lg-11 mt-2 mb-2">
            <h1 style={{ textAlign: "center", paddingLeft:"100px", fontFamily:"monospace" }}>Vehicle Fleet</h1>
          </div>
          <div className="col-lg-4 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
          </div>
        </Row>
        <Row xs={1} md={4}>
          {this.state.cars.map((item, index) => (
            <Col style={{ paddingTop: "15px" ,paddingBottom: "20px"}} key={index}>
              <Card>
                <CardImg class="thumbnail" src={item.image}  />
                <div class="box-element product">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                  There is a brand new fleet of luxury vehicles for hire in Sri Lanka on offer.<br/>
                  Leather Int. A/C, Ambient/ Mood lighting, Power Steering, BlueTooth, {item.transmission} Gear
                  </Card.Text>
                  <Button
                    variant="success"
                    onClick={() => this.props.history.push(`/car/${item._id}`)}
                    title="Show Details"
                  >
                    
                    Read More
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
             
    );
  }
}
