import React, { Component } from 'react'

export default class ProductsItem extends Component {
    // state={
    //     product:[]
    // }
    // componentDidMount(){
    //     axios.get('https://fakestoreapi.com/products/'+this.props.match.params.id)
    //     .then((res)=>{
    //         this.setState({
    //             product:res.data
    //         })
    //     })
    // }
  render() {
    return (
      <div className='container'>
        <div className='row my-5'>
            <h1>Product Item</h1>
        </div>
      </div>
    )
  }
}
