import React, { Component } from "react";
import axios from "axios";
import { Button, Card, Container, Col, Row } from "react-bootstrap";

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
            <Col style={{ paddingTop: "15px" }} key={index}>
              <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    variant="success"
                    onClick={() => this.props.history.push(`/car/${item._id}`)}
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
