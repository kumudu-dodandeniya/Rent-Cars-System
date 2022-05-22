import React, { Component } from 'react'
import axios from 'axios';

export default class postdetails extends Component {
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get('/post/${id}').then((res) =>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });

        console.log(this.state.post);
      }
    });

  }


  render() {


    return (
      <div>
        Reservation Details
      </div>
    )
  }
}
