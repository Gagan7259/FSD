import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <Link to="/" className="navbar-brand">
            Play
          </Link>
          <div >
            <ul className="navbar-nav">
              <li className="nav-list"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-list"><Link className="nav-link" to="/">About</Link></li>
              <li className="nav-list"><Link className="nav-link" to="/">Pricng</Link></li>
              <li className="nav-list"><Link className="nav-link" to="/">Team</Link></li>
              <li className="nav-list"><Link className="nav-link" to="/">contact</Link></li>


              <li className="nav-list"><Link className="nav-link" to="/">Sign In</Link></li>
<button class='bg' className='bg-success'>Sign Up</button>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
