import React, { useState } from 'react';
import axios from 'axios';
import './FSignIn.css';
import NavMain from './NavMain';
import { useNavigate, Link } from 'react-router-dom';


function FSignIn() {
    const [farmer, setFarmer] = useState({
        fName: '',
        fPass: ''
    });

    // const [getf, setGetf] = useState(null); // Ensure initial state is null

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFarmer({ ...farmer, [name]: value });
    };

    let nav = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/farmer/signin/${farmer.fName}/${farmer.fPass}}`

        ).then(() => {
            alert("Sign in successfull!!!")
            nav("/farmerhome")

        })
            .catch((error) => {
                window.alert('Login Failed. Please enter correct information.');
                console.error("Login Error:", error);
            });
    };

    return (

        <>
            <NavMain />
            <div className='farmer-signin-body'>
            <div className='signin-card'>
                <div id='box1'>
                <h1>लॉगिन करा</h1>
                    <form onSubmit={handleSubmit}>
                        <label className='signin-label'>तुमचे नाव इथे प्रविष्ट करा</label>
                        <input
                            className='input'
                            type="text"
                            name="fName"
                            placeholder="तुमचे नाव इथे प्रविष्ट करा"
                            onChange={handleInputChange}
                            value={farmer.fName}
                            required
                        />
                        <br />
                        <label className='label'>तुमचा पासवर्ड इथे प्रविष्ट करा</label>
                        <input
                            className='input'
                            type="password"
                            name="fPass"
                            placeholder="तुमचा पासवर्ड इथे प्रविष्ट करा"
                            onChange={handleInputChange}
                            value={farmer.fPass}
                            required
                        />
                        <br />
                        <button type="submit" >लॉगिन करा</button>
                        <p id='pre'>खाते नाही का? <Link to={'/farmersignup'}>नोंदणी करा</Link></p>


                    </form>
                </div>
            </div>
            </div>
        </>

    );
}

export default FSignIn;
