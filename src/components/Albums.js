import axios from 'axios'
import React, { Component } from 'react'

export default class Albums extends Component {
  state={
    album:[]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then((res)=>{
      this.setState({
        album:res.data
      })
    })
  }
  render() {
    return (
      <div className='container'>
        <div className='row my-5'>
          {
            this.state.album.map((item,index)=>(
              <h4 key={index} className="my-3 col-xl-6 h-100">
                <i>{item.id} </i> 
                {item.title}
              </h4>
            ))
          }
        </div>
      </div>
    )
  }
}
