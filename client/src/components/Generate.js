import React, { Component } from 'react'  
import Table from 'react-bootstrap/Table'
import { Button } from "react-bootstrap";
import Paper from '@material-ui/core/Paper';  
import axios from 'axios';  
import jsPDF from 'jspdf';  


import html2canvas from 'html2canvas';  
 
 


export default class Generate extends Component {
  
  constructor(props){
    super(props);

    this.state={
      cars:[]
    };
  } 

  printDocument() {  
    const input = document.getElementById('pdfdiv');  
    html2canvas(input)  
      .then((canvas) => {  
        var imgWidth = 200;  
        var pageHeight = 290;  
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
        const imgData = canvas.toDataURL('image/png');  
        const pdf = new jsPDF('p', 'mm', 'a4')  
        var position = 0;  
        var heightLeft = imgHeight;  
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
        pdf.save("download.pdf");  
      });  
  }

  componentDidMount(){
    this.retrieveCars();
  }

  retrieveCars(){
    axios.get("http://localhost:8000/cars").then(res => {
      if(res.data.success){
        this.setState({
          cars:res.data.existingCars
        });

        console.log(this.state.cars);
      }
    });
  }

  render() {
    return (
      <div  id="pdfdiv" style={{padding:"40px"}} component={Paper}>
       <div className="row" style={{paddingBottom:"40px"}}>
          <div className='center'>
            <h2 style={{ textAlign: "center",fontFamily:"monospace" }}>Vehicle Details</h2>
          </div>
      
        </div>
        <Table striped bordered hover size="sm"   style={{paddingTop:"40px"}}>
          <thead>

            <tr  class="table-primary" style={{borderColor: "black"}}>
              <th scope="col">#</th>
              <th scope="col">Vehicle Name</th>
              <th scope="col">Type</th>
              <th scope="col">Seating Capacity</th>
              <th scope="col">Fuel Type</th>
              <th scope="col">Transmission</th>
              <th scope="col">Rate Per Day </th>
              <th scope="col">Rate Per Week</th>
            
            </tr>
          </thead>
          <tbody style={{borderColor: "black"}}>
            {this.state.cars.map((cars,index) =>(
              <tr key={index} class="table-active" > 
                <th scope='row' class="table-dark">{index+1} </th>
                <td >{cars.name}</td>
                <td>{cars.type}</td>
                <td>{cars.capacity}</td>
                <td>{cars.fuelType}</td>
                <td>{cars.transmission}</td>
                <td>Rs.{cars.rateper}.00</td>
                <td>Rs.{cars.rateweek}.00</td>

                
                
              </tr>
            ))}
          </tbody>
        </Table>

                 <Button
                  
                    style={{ marginTop: "15px", marginBottom: "20px" }}
                    title="Download vehicle details pdf"
                    onClick={this.printDocument} variant="success" color="primary">  
                    Download Pdf  
                </Button> 
      </div>
    )
}
}