
import React from 'react'
import './NavMain.css';
import { Link } from 'react-router-dom';

function NavMain() {
  return (
    <div>
      <nav className="navbarmain">
        <div className="navmain-logo">Green Basket</div>
        <ul className="navmain-links">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/usersignin'}>User LogIn</Link></li>
          <li><Link to={'/farmersignin'}>Farmer LogIn</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavMain

