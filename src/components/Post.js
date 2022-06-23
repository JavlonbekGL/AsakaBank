import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Post extends Component {
  state={
    post:[]
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
      this.setState({
        post:res.data
      })
    })
  }
  render() {
    return (
      <div className='container'>
        <div className='row my-5'>{
          this.state.post.map((item,index)=>(
            <div className='col-xl-4 mb-3'>
              <div className='card h-100'>
                <h5><b>{item.id}</b>) {item.title}</h5>
                <div className='card-footer text-end h-100'>
                  <Link to={"post/"+item.id}>batafsil</Link>
                </div>
              </div>
            </div>
          ))
        }</div>
      </div>
    )
  }
}
