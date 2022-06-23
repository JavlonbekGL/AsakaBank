import axios from 'axios'
import React, { Component } from 'react'

export default class Users extends Component {
  state={
    user:[]
  }
  componentDidMount(){
    axios.get("https://fakestoreapi.com/users")
    .then((res)=>{
      this.setState({
        user:res.data
      })
    })
  }
  render() {
    return (
      <div className='container'>
        <div className='row my-5'>{
          this.state.user.map((item,index)=>(
            <div className="col-xl-3 mb-3" key={index}>
                        <div className='card'>
                            <div className='card-header text-center'>
                                <b className='me-2'>{item.name.firstname}</b>   
                                <b>{item.name.lastname}</b>
                            </div>
                            <div className='card-body'>
                                <p>email: <b>{item.email}</b></p>
                                <p>username: <b>{item.username}</b></p>
                            </div>
                        </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
