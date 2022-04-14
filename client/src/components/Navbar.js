import React, { Component } from 'react'
import { Container,Nav,Navbar} from "react-bootstrap";


export default class bar extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand> <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="/home">Vehicle Fleet</Nav.Link>
          <Nav.Link href="/add">Add</Nav.Link>
          <Nav.Link href="/">Cars Details</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
  }
}
