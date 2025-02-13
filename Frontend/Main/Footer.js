import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Support</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Track Order</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <a href="#" className="social-icon">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fa fa-twitter"></i>
          </a>
        </div>

        <div className="footer-section">
          <h4>Download App</h4>
          <a href="#">App Store</a><br />
          <a href="#">Google Play</a>
        </div>
      </div>

      <div className="footer-description">
        <p>
          Get your groceries delivered in 15 to 30 minutes. Choose from hundreds of essential items. 
          GreenBasket service is currently available in Pune city only. We provide products directly from farms. 
          Also, we check product quality. Your health is our priority. Download the GreenBasket app and eat fresh 
          and healthy products.
        </p>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-payment-methods">
          <h4>Accepted Payments</h4>
          <p>Secured Payments</p>
        </div>
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Green Basket, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
