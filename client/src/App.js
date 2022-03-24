import React, { Component } from 'react'
import{BrowserRouter,Route} from 'react-router-dom';
import CarDetails from './components/CarDetails';
import CreateCar from './components/CreateCar';
import EditCar from './components/EditCar';
import Navbar from './components/Navbar';
import ReadCars from './components/ReadCars';
import Home from './components/Home';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className='container'>
        <Navbar/>
        <Route path="/" exact component={ReadCars} ></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/add" exact component={CreateCar}></Route>
        <Route path="/edit/:id" exact component={EditCar}></Route>
        <Route path="/car/:id" exact component={CarDetails}></Route>
        
      </div>
      </BrowserRouter>
    )
  }
}
