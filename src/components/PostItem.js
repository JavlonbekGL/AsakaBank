import axios from 'axios'
import React, { Component } from 'react'

export default class PostItem extends Component {
    state={
        post:{}
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.match.params.id)
        .then((res)=>{
            this.setState({
                post:res.data
            })
        })
    }
  render() {
    const {post}=this.state
    return (
      <div className='container'>
        <div className='row ny-5'>
            <div className='col-xl-12'>
                <h3>
                    <i>{post.id} </i>
                    {post.body}
                    </h3>
            </div>
        </div>
      </div>
    )
  }
}
