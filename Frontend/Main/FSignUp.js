import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './FSignUp.css';
import NavMain from './NavMain';
import { Link } from 'react-router-dom';

function FSignUp() {
    const [farmer, setFarmer] = useState({
        fName: '',
        fPass: '',
        fEmail: '',
        fMobile: '',
        fAddress: ''
    });

    const [error, setError] = useState('');

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFarmer({ ...farmer, [name]: value });
    };

    const navigate = useNavigate();

    const validateForm = () => {
        const { fName, fPass, fEmail, fMobile, fAddress } = farmer;
        if (!fName || !fPass || !fEmail || !fMobile || !fAddress) {
            setError('कृपया सर्व फील्ड भरा');
            return false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(fEmail)) {
            setError('कृपया वैध ई-मेल टाका');
            return false;
        }
        if (!/^\d{10}$/.test(fMobile)) {
            setError('मोबाईल नंबर 10 अंकी असावा');
            return false;
        }
        setError('');
        return true;
    };

    const FarmerSub = async (s) => {
        s.preventDefault();
        if (!validateForm()) return;

        try {
            await axios.post("http://localhost:8080/farmer/signup", farmer);
            alert('अभिनंदन! तुमची नोंदणी यशस्वी झाली');
            setFarmer({ fName: '', fPass: '', fEmail: '', fMobile: '', fAddress: '' });
            navigate("/farmersignin");
        } catch (error) {
            console.error(error);
            alert("काहीतरी चूक झाली, कृपया पुन्हा प्रयत्न करा!");
        }
    };

    return (
        <>
        <NavMain/>
        <div className='farmer-signup-body'>
            <div id='box'>
                <form onSubmit={FarmerSub}>
                    <h2>शेतकरी नोंदणी</h2>
                    {error && <p className="error">{error}</p>}
                    
                    <label className='label'>तुमचे नाव</label>
                    <input className='input' type="text" name="fName" placeholder="तुमचे नाव प्रविष्ट करा" onChange={handleInput} value={farmer.fName} required />
                    
                    <label className='label'>पासवर्ड</label>
                    <input className='input' type="password" name="fPass" placeholder="तुमचा पासवर्ड प्रविष्ट करा" onChange={handleInput} value={farmer.fPass} required />

                    <label className='label'>मोबाईल नंबर</label>
                    <input className='input' type="text" name="fMobile" placeholder="मोबाईल नंबर प्रविष्ट करा" onChange={handleInput} value={farmer.fMobile} required />

                    <label className='label'>ई-मेल</label>
                    <input className='input' type="email" name="fEmail" placeholder="ई-मेल प्रविष्ट करा" onChange={handleInput} value={farmer.fEmail} required />

                    <label className='label'>पत्ता</label>
                    <input className='input' type="text" name="fAddress" placeholder="पत्ता प्रविष्ट करा" onChange={handleInput} value={farmer.fAddress} required />

                    <button id='submit' type="submit">नोंदणी करा</button>

                    <p>आधीच नोंदणी केली आहे? <Link to={'/farmersignin'}>लॉगिन करा</Link></p>  
                </form>
            </div>
            </div>
        </>
    );
}

export default FSignUp;
