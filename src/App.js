import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Albums from './components/Albums'
import Cart from './components/Cart'
import Comments from './components/Comments'
import MyNavbar from './components/MyNavbar'
import Photos from './components/Photos'
import Post from './components/Post'
import PostItem from './components/PostItem'
import Products from './components/Products'
import ProductsItem from './components/ProductsItem'
import Todos from './components/Todos'
import Users from './components/Users'

export default class App extends Component {
  render() {
    return (
      <div>
        <MyNavbar/>
        <Switch>
          <Route exact path='/Products' component={Products} />
          <Route exact path='/Products/:id' component={ProductsItem} />
          <Route exact path='/Cart' component={Cart} />
          <Route exact path='/Users' component={Users} />
          <Route exact path='/Post' component={Post} />
          <Route exact path='/Post/:id' component={PostItem} />
          <Route exact path='/Comments' component={Comments} />
          <Route exact path='/Albums' component={Albums} />
          <Route exact path='/Photos' component={Photos} />
          <Route exact path='/Todos' component={Todos} />
        </Switch>
      </div>
    )
  }
}

// import React from 'react'
// import Lesson from './components/Lesson'

// export default function App() {
//   const user={
//     firstName:' Javlon',
//     lastName:' Gaybullayev'
//   }

//   const cars=[
//     {
//       company: 'Lambarghini',
//       model: 'Urus',
//       price: '450 000$'
//     },
//     {
//       company: 'Mersedes',
//       model: 'Maybach',
//       price: '250 000$'
//     },
//     {
//       company: 'Maserati',
//       model: 'C50',
//       price: '380 000$'
//     }
//   ]

//   function test(name){
// alert('Hello '+ name)
//   }

//   return (
//     <div className='container'>
//       <h1>
//       Hello world
//       </h1>
//       <button onClick={()=>test('Doston')}>Test button</button>
//       <Lesson user={user}/>

//       <div className='row my-5'>
//         {cars.map((item,index)=>(
//           <div key={index} className="col-xl-4">
//             <div className='card'>
//               <div className='card-header'>
//                 <h4>{item.company}</h4>
//               </div>
//               <div className="card-body">
//                 <p>
//                   Model: <b>{item.model}</b>
//                 </p>
//                 <p>
//                   Price: <b>{item.price}</b>
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
