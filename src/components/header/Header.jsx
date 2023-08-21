import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='custom-navbar'>
      <div className="container">
        <div className="nav-area">
          <h2>Gallarea</h2>
          <a className='btn btn-outline-primary'>Login</a>
        </div>
      </div>
    </div>
  )
}

export default Header