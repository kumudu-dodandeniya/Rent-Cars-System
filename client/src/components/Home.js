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
          <div className="col-lg-9 mt-2 mb-2">
            <h4 style={{ textAlign: "center" }}>Vehicle Fleet</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
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
                  There is a brand new fleet of luxury cars for hire in Sri Lanka on offer.{item.type}
                  </Card.Text>
                  <Button
                    variant="success"
                    onClick={() => this.props.history.push(`/car/${item._id}`)}
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
