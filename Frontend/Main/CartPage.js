import React, { useContext, useState } from 'react';
import './CartPage.css';
import { CartContext } from './CartContext';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({}); // To store quantities for each item

  // Function to remove item from cart
  function remove(itemname) {
    removeFromCart(itemname); // Pass the item name to remove
  }

  // Function to handle quantity change
  const handleQuantityChange = (e, itemname) => {
    const newQuantity = e.target.value;
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemname]: newQuantity
    }));
  };

  // Function to calculate total price of items in cart
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const quantity = quantities[item.name] || 1; // Default quantity is 1 if not set
      return total + item.price * quantity;
    }, 0).toFixed(2);
  };

  //payment method
  const placeorder = async () => {
    const totalAmount = parseFloat(getTotalPrice()) * 100; // Convert to paise
  
    // Ensure Razorpay script is loaded
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Please check your internet connection.");
      return;
    }
  
    const options = {
      key: "rzp_test_aZuv4MzdTLAtqk", // Replace with your Razorpay Key ID
      amount: totalAmount,
      currency: "INR",
      name: "Ecommerce ",
      description: "Purchase Order",
      handler: function (response) {
        alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        // navigate('/order', { state: { cartItems, total: getTotalPrice() } });
      },
      prefill: {
        name: "Rushikesh Mali",
        email: "rushikesgbhimade@gmail.com",
        contact: "9921655898",
      },
      theme: {
        color: "#3399cc",
      }
    };
  
    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  return (
    <div className="cart-page">

     <nav className="userhomenavbar">
        <div className="userlogo">GreenBasket</div>
        <ul className="navlinks">
          <li><Link to={'/userhome'}>Home</Link></li>
          <li><Link to={'#'}>Contact</Link></li>
          <li> <Link to={'/cart'}>🛒 Cart </Link></li>
          <li><Link to={'/'}>LogOut</Link></li>
        </ul>
        <div className="menu-toggle">☰</div>
      </nav>
    
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p id='cart-text'>Your cart is empty! Add some products!!!</p>
      ) : (
        <div>
          <div className="card-container">
            {cartItems.map((item) => (
              <Card className="card" key={item.name}>
                <Card.Img variant="top" src={item.Image} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    ₹{item.price.toFixed(2)}
                  </Card.Text>
                  {/* Quantity input */}
                  <input
                    type="number"
                    value={quantities[item.name] || 1}
                    min="1"
                    onChange={(e) => handleQuantityChange(e, item.name)}
                    className="quantity-input"
                  />
                  <Button variant="danger" onClick={() => remove(item.name)}>
                    Remove from Cart
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>

          {/* Total Price Section */}
          <div className="total-price">
            <h4>Total Price: ₹{getTotalPrice()}</h4>
            <Button variant="success" className="proceed-btn" onClick={placeorder}>Proceed to Pay</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
