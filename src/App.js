import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"

import EditEmployee from "./components/Edit-Employee.component";
import CreateEmployee from "./components/Create-Employee.component";
import EmployeeList from "./components/Employee-list.component";
import Report from "./components/Report.component";
import Footer from "./components/Footer";


function App() {

    return ( <Router >
        <div className = "container" >
        <Navbar/ >
        <br/ >
        <Route path = "/" exact component = { EmployeeList }/>
        <Route path = "/edit/:id" component = { EditEmployee }/> 
        <Route path = "/create" component = { CreateEmployee }/> 
        <Route path = "/Report" component = { Report }/> 
        </div > 
        <Footer/>
        </Router>
    );
}

export default App;