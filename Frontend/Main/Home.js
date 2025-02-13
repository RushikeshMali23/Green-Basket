import React from 'react';
import './Home.css';
import NavMain from './NavMain';

const reviews = [
    { id: 1, name: "Priya K.", review: "Amazing quality and super fresh! Highly recommend Green Basket.", photo: "https://tse3.mm.bing.net/th?id=OIF.S5o3QnYMqw1fN8O%2foQn0UA&pid=Api&P=0&h=180" },
    { id: 2, name: "Rajesh P.", review: "Excellent service and fair prices. I'm a regular customer now!", photo: "https://tse3.mm.bing.net/th?id=OIP.DT8xNn3Y4kMuP_pHq1RA-wHaFj&pid=Api&P=0&h=180" },
    { id: 3, name: "Sneha M.", review: "I love the variety and organic options they offer.", photo: "https://tse2.mm.bing.net/th?id=OIP.orugXvkW5J4vY0zIk4iKKQHaLG&pid=Api&P=0&h=180" }
];

const healthBenefits = [
    { id: 1, title: "Heart Health", desc: "Apples help lower cholesterol and blood pressure.", image: "https://tse3.mm.bing.net/th?id=OIP.LIWr2QLiD9XZ3IMWuuRpHAHaEB&pid=Api&P=0&h=180" },
    { id: 2, title: "Blood Circulation", desc: "Beetroot are great for increasing blood flow.", image: "https://tse1.mm.bing.net/th?id=OIP.KnKlDEo3Wjln1iWzk6Bu6AHaFq&pid=Api&P=0&h=180" },
    { id: 3, title: "Nervous System", desc: "Avocados support brain function.", image: "https://tse2.mm.bing.net/th?id=OIP.xcqiJUWJpFF6WCalgengzQHaEK&pid=Api&P=0&h=180" },
    { id: 4, title: "Diabetes Control", desc: "Bitter melon and help regulate blood sugar levels.", image: "https://tse3.mm.bing.net/th?id=OIP.o1-5E0ZwMjrcNZ2feSj2tQHaFL&pid=Api&P=0&h=180" }
];

function Home() {
    return (
        <>
        <NavMain />
        <div className="home-container">
            <header className="hero-section">
                <h1>Welcome to Green Basket</h1>
                <marquee>Fresh Fruits, Vegetables, and Dairy Products, Delivered from Farmers to Your Doorstep in Pune.</marquee>
            </header>


            <section id="health-benefits" className="health-section">
                <h2>Health Benefits of Fresh Fruits & Vegetables</h2>
                <div className="health-container">
                    {healthBenefits.map(benefit => (
                        <div key={benefit.id} className="health-card">
                            <img src={benefit.image} alt={benefit.title} className="health-image" />
                            <div className="health-info">
                                <h3>{benefit.title}</h3>
                                <p>{benefit.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="reviews" className="reviews-section">
                <h2>Customer Reviews</h2>
                <div className="reviews-container">
                    {reviews.map(review => (
                        <div key={review.id} className="review-card">
                            <img src={review.photo} alt={review.name} className="review-photo" />
                            <div className="review-info">
                                <h3>{review.name}</h3>
                                <p>{review.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="blog" className="blog-section">
                <h2>Why Fresh Fruits and Vegetables Matter</h2>
                <p>Nutrient-Rich: Packed with vitamins, minerals, and antioxidants that support overall health.<br/>

Promote Digestive Health: High in fiber, aiding digestion and preventing constipation.<br/>

Prevent Chronic Diseases: Reduces the risk of heart disease, diabetes, and certain cancers.</p>
            </section>

            <footer className="homefooter">
                <p>&copy; 2025 Green Basket. All rights reserved.</p>
            </footer>
        </div>
        </>
    );
}

export default Home;
