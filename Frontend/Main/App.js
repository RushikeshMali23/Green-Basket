import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
// import './App.css';

import Home from './Home';
import FSignUp from './FSignUp';
import FSignIn from './FSignIn';
import UserSignUp from './UserSignUp';
import UserSignIn from './UserSignIn';
import FarmerHome from './FarmerHome';
import UserHome from './UserHome';
import CartPage from './CartPage';
// import CartComponent from './CartComponent';
// import CartPage from './CartPage';




function App() {

  return (
     
         <div className="App">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/farmersignup' element={<FSignUp/>}/>
              <Route path='/farmersignin' element={<FSignIn/>}/>
              <Route path='/usersignup' element={<UserSignUp/>}/>
              <Route path='/usersignin' element={<UserSignIn/>}/>
              <Route path='/farmerhome' element={<FarmerHome/>}/>
              <Route path='/userhome' element={<UserHome/>}/>
              {/* <Route path='/cart' element={<CartComponent/>}/> */}
              <Route path='/cart' element={<CartPage/>}></Route>

          </Routes>
        </div>
     

    //   <div>
    //  <div>
    //   <CartPage/>
    //  </div>
    //  </div>

  );
}

export default App;

 