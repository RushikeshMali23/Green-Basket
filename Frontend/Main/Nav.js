import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <div id='nav'>
    <div>
     <h1>GreenBasket</h1>
     </div>
    <div id='list'>
     <button className='buton'>Add Products</button>
     <button className='buton'>Show Products</button> 
     <button className='buton'>Delete Products</button>     
     </div>
     <h4 id='fname'>Farmer Name</h4> 
     </div>
  )
}

export default Nav;
