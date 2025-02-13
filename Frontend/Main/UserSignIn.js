import React, { useState } from 'react';
import axios from 'axios';
import './UserSignIn.css';
import NavMain from './NavMain';
import { useNavigate, Link } from 'react-router-dom';


function UserSignIn() {
    const [user, setuser] = useState({
        uEmail: '',
        uPass: ''
    });

    // const [getf, setGetf] = useState(null); // Ensure initial state is null

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value });
    };
    let nav=useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
             axios.post(`http://localhost:8080/user/signin/${user.uEmail}/${user.uPass}}`
            
    ).then((res)=>{
       console.log(res);
       
        if(res.data=='SignIn Failed!!!'){
            alert("Sign in failed!!!")
        }
        else{
            alert("Sign In Succssesfull!!")
            nav("/userhome")
        }
    })
      .catch ((error) => {
            window.alert('Login Failed. Please enter correct information.');
            console.error("Login Error:", error);
        });
    };

    return (
         
        <>
        <NavMain/>
        <div className='user-signin-body'>
        <h1 className='h1'>User Sign In</h1>
            <div id='user-box'>
                <form onSubmit={handleSubmit}>
                    <label className='u-signin-label'>Enter Your Email</label>
                    <input 
                        className='input' 
                        type="text" 
                        name="uEmail" 
                        placeholder="Enter Your Email" 
                        onChange={handleInputChange} 
                        value={user.uEmail} 
                        required
                    />
                    <br />
                    <label className='label'>Enter Your Password</label>
                    <input 
                        className='input' 
                        type="password"  
                        name="uPass" 
                        placeholder="Enter Your Password" 
                        onChange={handleInputChange} 
                        value={user.uPass} 
                        required
                    />
                    <br />
                    <button type="submit">Login</button>
                    <p id='usup'>Don't have an account?<Link to={'/usersignup'}> Sign Up</Link></p>
                
                </form>
            </div>
            </div>
        </>
    );
}

export default UserSignIn;
