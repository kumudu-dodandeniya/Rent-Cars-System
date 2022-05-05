import React, { Component } from 'react'  
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper';  
import axios from 'axios';  
import jsPDF from 'jspdf';  
import Button from '@material-ui/core/Button';  

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

  /*componentDidMount(){
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
  }*/

  componentDidMount() {  
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
      <div>  
        <TableContainer id="pdfdiv" className="txt" component={Paper}>  
          <Table stickyHeader aria-label="sticky table">  
            <TableHead>  
              <TableRow>  
                 
                <TableCell align="right">Vehicle Name</TableCell>  
                <TableCell align="right">Type</TableCell>  
                <TableCell align="right">Seating Capacity</TableCell>  
                <TableCell align="right">Fuel Type</TableCell>  
                <TableCell align="right">Transmission</TableCell>  
                
                <TableCell align="right">Rate Per Day</TableCell>  
                <TableCell align="right">Rate Per Week</TableCell>  
                

                
              </TableRow>  
            </TableHead>  
            <TableBody>  
              {  
              
                this.state.cars.map((p, index) => {  
                  return <TableRow key={index}>  
                    <TableCell component="th" scope="row">  
                        
                    </TableCell>  
                    <TableCell align="right">{p.name}</TableCell>  
                    <TableCell align="right">{p.type}</TableCell>  
                    <TableCell align="right">{p.capacity}</TableCell>  
                    <TableCell align="right">{p.fuelType}</TableCell>  
                    <TableCell align="right">{p.transmission}</TableCell>  
                   
                    <TableCell align="right">{p.rateper}</TableCell> 
                    <TableCell align="right">{p.rateweek}</TableCell> 

                   

                    
                  
                  </TableRow>  
                })  
              }  
            </TableBody>  
          </Table><br></br>  
          <Button onClick={this.printDocument} variant="contained" color="primary">  
            Generate Pdf  
                                </Button>  
        </TableContainer>  
  
      </div>  
  
    );  
  }  
}  
