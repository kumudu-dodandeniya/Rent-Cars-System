import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CarDetails from "./components/CarDetails";
import CreateCar from "./components/CreateCar";
import EditCar from "./components/EditCar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ReadCars from "./components/ReadCars";
import Home from "./components/Home";
import { Container,  } from "react-bootstrap";
import "./App.css";
import "./photo.css";
import photo from "./components/photo";



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container fluid className={"wrapper"}>
          <NavBar />
          
          <Route path="/" exact component={ReadCars}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/add" exact component={CreateCar}></Route>
          <Route path="/edit/:id" exact component={EditCar}></Route>
          <Route path="/car/:id" exact component={photo}></Route>

          

          <Footer/>
        </Container>
      </BrowserRouter>
    );
  }
}
