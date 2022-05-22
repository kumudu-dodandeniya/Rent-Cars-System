import React, { Component } from 'react';
import axios from 'axios';


export default class home extends Component {
constructor(props){
  super(props);

  this.state={
    posts:[]
  };
}

componentDidMount(){
  this.retrievePosts();
}

retrievePosts(){
  axios.get("http://localhost:8000/posts").then(res =>{
    if(res.data.success){
      this.setState({
        posts:res.data.existingPosts
      });

      console.log(this.state.posts)
    }
  });
}



onDelete = (id) =>{

  axios.delete(`/post/delete/${id}`).then((res) =>{
    alert("deleted successfully");
    this.retrieveposts();
  })
}

  render() {

   

    return (
      <div className='container'>
        <h2>Reservation Details</h2>
        <table className= "table table-striped">
          <thead>
            <tr>
              <th scope = "col">Vehicle Name</th>
              <th scope = "col">Reserve From</th>
              <th scope = "col">Reserve To   </th>
              <th scope='col'>Reservation On</th>
              <th scope = "col">No Of Passengers</th>
              <th scope = "col">Driver Cost</th>
             

            </tr>

          </thead>
          <tbody>
            {this.state.posts.map((posts) =>(
              <tr>
                
                <td>
                    <a href={'/post/{posts._id}'} style={{textDecoration:'none'}}>
                    {posts.vehicleName}
                    </a>
                    </td>
                <td>{posts.pickupDate}</td>
                <td>{posts.dropoffDay}</td>
                <td>2022-04-17</td>
                <td>{posts.noofPassengers}</td>
                
                <td>Rs.2500.00</td>
                
                <td>
                <a className="btn btn-secondary btn-sm" href="00">
                  Total Payment
                    
                  </a>
                  &nbsp;
                  <a className='btn btn-warning btn-sm' href={`/edit/${posts._id}`}>
                    <i className='fas fa-edit'></i>&nbsp;CHANGE

                  </a>
                  &nbsp;
                  <a className='btn btn-danger btn-sm' href="#" onClick={() =>this.onDelete(posts._id)}>
                    <i className='far fa-trash-alt'></i>&nbsp;REMOVE

                  </a>
                </td>



              </tr>


            ))}



          </tbody>
        </table>

        <button className='btn btn-success'>
                <a href='/add' style={{textDecoration:'none', color:'white'}}>Add Customer Booking</a>
        </button>
      </div>
     
    )
  }
}


