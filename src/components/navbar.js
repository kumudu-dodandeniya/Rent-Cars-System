import React, { Component } from 'react'
import { Nav, Navbar} from 'react-bootstrap'

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
      <div class="container-fluid">
        <Navbar.Brand> 
          <img src= {process.env.PUBLIC_URL+"images/img.png"}
        style={{  width:"100px", height:"100px"}}
        width="30"
        height="30"
        className="d-inline-block align-top"
      /></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/home">Vehicle Fleet</Nav.Link>
          <Nav.Link href="/add">Add</Nav.Link>
          <Nav.Link href="/">Cars Details</Nav.Link>
        </Nav>
        </div>
      </Navbar>
    )
  }
}

        
  
