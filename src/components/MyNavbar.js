import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class MyNavbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand me-5" to="/">Logo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item ms-5 me-5">
                <Link className="nav-link" to="/Products">Products</Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" to="/Cart">Cart</Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" to="/Users">Users</Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" to="/Post">Post</Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" to="/Comments">Comments</Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" to="/Albums">Albums</Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" to="/Photos">Photos</Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" to="/todos">todos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
