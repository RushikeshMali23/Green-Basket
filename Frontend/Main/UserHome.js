import React, { useContext } from 'react';
import './UserHome.css';
import { useState } from 'react';
import Footer from './Footer';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

export default function UserHome() {
  let allProducts = [
    {
      Image: "https://tse4.mm.bing.net/th?id=OIP.CnYdBY98A2NZ0Tc8pqyHRAHaEn&pid=Api&P=0&h=180",
      name: "Keshar Mango",
      category: "Fruits",
      price: 249.0,
      weight: "1 kg",


    },
    {
      Image: "https://tse4.mm.bing.net/th?id=OIP.BWLKoBJiuuQoMl_j-mrbQgHaGc&pid=Api&P=0&h=180",
      name: "Strawberry",
      category: "Fruits",
      price: 99.0,
      weight: "250 gm",
    },
    {
      Image: "https://tse4.mm.bing.net/th?id=OIP.gAa8jFPkOBfKfFvn8eV3KAHaE7&pid=Api&P=0&h=180",
      name: "Paneer",
      category: "Milk Products",
      price: 149.0,
      weight: "500 gm",

    },
    {
      Image: "https://tse1.mm.bing.net/th?id=OIP.73SFPtJX8SEc3xw3uX2eKgHaE7&pid=Api&P=0&h=180",
      name: "Methi",

      category: "Vegetables",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse2.mm.bing.net/th?id=OIP.040MMbJbiGxRxXlOLz8MHAHaHa&pid=Api&P=0&h=180",
      name: "Palak",
      category: "Vegetables",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse4.mm.bing.net/th?id=OIP.z8yukSQEDfkr8rIVu0CSwgHaFe&pid=Api&P=0&h=180",
      name: "Guava",
      category: "Fruits",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse3.mm.bing.net/th?id=OIP.r7AWfFKqaS6eLqmN8kTOEwAAAA&pid=Api&P=0&h=180",
      name: "Dill Leaves",
      category: "Vegetables",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse3.mm.bing.net/th?id=OIP.ozBO980OWH3pBRdEpNczqgHaF_&pid=Api&P=0&h=180",
      name: "Pomegranates",
      category: "Fruits",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse3.mm.bing.net/th?id=OIP.XprgHSCfPgHBpfQBBfAWqwHaFb&pid=Api&P=0&h=180",
      name: "Apple",
      category: "Fruits",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse1.mm.bing.net/th?id=OIP.gF82ItKH3X25J8lKdNE9vwHaEK&pid=Api&P=0&h=180",
      name: "Banana",
      category: "Fruits",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse1.mm.bing.net/th?id=OIP.8AwxFaAoFqZOwtvyWOxSxwHaGA&pid=Api&P=0&h=180",
      name: "Brinjal",
      category: "Vegetables",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse1.mm.bing.net/th?id=OIP.zB7AATBDNYVwv3rUfXbYcwHaE8&pid=Api&P=0&h=180",
      name: "Potato",
      category: "Vegetables",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse3.mm.bing.net/th?id=OIP.kI-iBx4WTxMNm4Ou9PvlrQHaEK&pid=Api&P=0&h=180",
      name: "Drumstick",
      category: "Vegetables",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse1.mm.bing.net/th?id=OIP.XoQhZjjJB9Ucpb2k86GEXgHaFF&pid=Api&P=0&h=180",
      name: "Oranges",
      category: "Fruits",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse4.mm.bing.net/th?id=OIP.Kp70qDrQjNOqds5-T6_hBgHaF5&pid=Api&P=0&h=180",
      name: "Watermelon",
      category: "Fruits",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse3.mm.bing.net/th?id=OIP.jKJ7j7b6jrDT5TVWpdJ1swAAAA&pid=Api&P=0&h=180",
      name: "Nagpur Oranges",
      category: "Fruits",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse3.mm.bing.net/th?id=OIP.tr38uLM7QBOLElGJHG88eQHaEi&pid=Api&P=0&h=180",
      name: "Carrot",
      category: "Vegetables",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse3.mm.bing.net/th?id=OIP.zeKqXlUZor5fT88s0IVDhQHaEm&pid=Api&P=0&h=180",
      name: "Broccoli",
      category: "Vegetables",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse4.mm.bing.net/th?id=OIP.J8uyQpskhWSgzvW5EtpAYgHaEK&pid=Api&P=0&h=180",
      name: "Cabbage",
      category: "Vegetables",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse4.mm.bing.net/th?id=OIP.VBsIasAfAgXvFhHAv-T6TgHaE7&pid=Api&P=0&h=180",
      name: "Grapes",
      category: "Fruits",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse4.mm.bing.net/th?id=OIP.BbZqziJ2SlW41TYdmHrnMAHaHa&pid=Api&P=0&h=180",
      name: "Onion (Nashik)",
      category: "Vegetables",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse3.mm.bing.net/th?id=OIP.PMTzAIIYuXhPLb-GiwhFggHaHa&pid=Api&P=0&h=180",
      name: "Sapota",
      category: "Fruits",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse4.mm.bing.net/th?id=OIP.uZp87Ur_r6uJh--tgDAc8wHaFw&pid=Api&P=0&h=180",
      name: "Ridge Gourd",
      category: "Vegetables",
      price: 229.0,
      weight: "1 kg",
    },
    {
      Image: "https://tse4.mm.bing.net/th?id=OIP.3LgTTLp4TK4mUQX2eOBBqAHaEK&pid=Api&P=0&h=180",
      name: "Custard Apple",
      category: "Fruits",
      price: 229.0,
      weight: "1 kg",
    }
  ]


  let [products, setProducts] = useState(allProducts);
  let {cartItems, addToCart}=useContext(CartContext)

  const filterCategory = (category) => {
    if (category === "All") {
      setProducts(allProducts);
    } else {
      const filteredProducts = allProducts.filter((item) => item.category === category);
      setProducts(filteredProducts);
    }
  };

  function add(item){

    addToCart(item)
  }
  
  return (
    <div className='userhome-body'>

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

      <div className='filter'>
        <button onClick={() => filterCategory("All")}>All</button>
        <button onClick={() => filterCategory("Fruits")}>Fruits</button>
        <button onClick={() => filterCategory("Vegetables")}>Vegetables</button>
        <button onClick={() => filterCategory("Milk Products")}>Milk Products</button>
      </div>

      <img src="https://www.bigbasket.com/media/uploads/flatpages/test-1/Fruits &amp; vegetables.jpg" alt="Banner Image" className="img-responsive" />

      <div className="cardscontainer">
        {/* Card for products */}

        {
          products.map((item) => {

            return (<div className="card">
              <img src={item.Image} alt="fruits" />
              <h3>{item.name}</h3>
              <strong>{item.category}</strong> <br/>
              <strong className="price">₹{item.price}</strong> <br/>
              <strong id='weight'>Weight {item.weight}</strong><br />
              <button className="cart-btn" onClick={()=>{add(item)}}>Add To Cart</button>
              {/* <button className="btn purchase-btn">Purchase</button> */}

            </div>
            )
          })
        }
      </div>
      <Footer />
    </div>
  );
}

