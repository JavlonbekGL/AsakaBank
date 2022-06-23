import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './products.css';

export default class Products extends Component {
    state={
        product:[]
    }
    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            this.setState({
                product:res.data
            })
        })
    }
  render() {
    return (
      <div className='container'>
        <div className='row my-5'>
            {
                this.state.product.map((item,index)=>(
                    <div className='col-xl-3 text-center mb-3' key={index}>
                        <div className='card'>
                            <div className='card-header text-center'>
                                {item.category}
                            </div>
                            <div className='card-body'>
                                <img src={item.image} alt="" />
                            </div>
                            <div className='card-footer text-center'>
                                <Link to={"Product/"+item.id}>Batafsil</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    )
  }
}

