import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import addpost from './components/addpost';
import editpost from './components/editpost';
import home from './components/home';
import postdetails from './components/postdetails';
import NavBar from './components/navbar';
import Footer from './components/Footer';
import { Container,  } from "react-bootstrap";
import "./App.css";





export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container fluid className={"wrapper"}
>
          <NavBar/>
          <Route path='/' exact component={home}></Route>
          <Route path='/add' component={addpost}></Route>
          <Route path='/edit/:id' component={editpost}></Route>
          <Route path='/post/:id' component={postdetails}></Route>

          <Footer/>
        </Container>

      
        
       
      
      
      </BrowserRouter>
      
    )
  };
};
