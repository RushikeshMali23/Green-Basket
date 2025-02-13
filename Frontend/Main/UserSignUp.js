import React, { useState } from 'react';
import axios from 'axios';
import './UserSignUp.css';
import NavMain from './NavMain';
import { useNavigate , Link} from 'react-router-dom';


function UserSignUp() {
  const [user, setUser] = useState({
    uName: '',
    uPass: '',
    uEmail: '',
    uMobile: '',
    uAddress: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validateForm = () => {
    const { uName, uPass, uEmail, uMobile, uAddress } = user;
    if (!uName || !uPass || !uEmail || !uMobile || !uAddress) {
      setError('All fields are required.');
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(uEmail)) {
      setError('Please enter a valid email.');
      return false;
    }
    if (!/^\d{10}$/.test(uMobile)) {
      setError('Mobile number must be 10 digits.');
      return false;
    }
    setError('');
    return true;
  };

  const userSub = async (s) => {
    s.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post("http://localhost:8080/user/signup", user);
      alert('Registration Successful!');
      setUser({ uName: '', uPass: '', uEmail: '', uMobile: '', uAddress: '' });
      navigate("/usersignin");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <NavMain />
      <div className='user-signup-body'>
        <h4 className='user-logo'>User SignUp</h4>
        {error && <p className="error">{error}</p>}
        <form onSubmit={userSub}>
          <div className='user-signup'>
            <label>Enter Your Name</label>
            <input type='text' name="uName" placeholder='Enter Your Name' onChange={handleInput} value={user.uName} required />

            <label>Enter Your Email</label>
            <input type='email' name="uEmail" placeholder='Enter Your Email' onChange={handleInput} value={user.uEmail} required />

            <label>Enter Your Mobile</label>
            <input type='text' name="uMobile" placeholder='Enter Your Mobile' onChange={handleInput} value={user.uMobile} required />

            <label>Enter Your Password</label>
            <input type='password' name="uPass" placeholder='Enter Your Password' onChange={handleInput} value={user.uPass} required />

            <label>Enter Your Address</label>
            <input type='text' name="uAddress" placeholder='Enter Your Address' onChange={handleInput} value={user.uAddress} required />

            <button type='submit'>Submit</button>
            <p>Already Registered? <Link to={'/usersignin'}>Please Log In</Link></p>
          </div>
        </form>
      </div>
    </>
  );
}

export default UserSignUp;
