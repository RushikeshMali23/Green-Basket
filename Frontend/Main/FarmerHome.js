import axios from "axios";
import { useState, useEffect } from "react";
import './FarmerHome.css';
// import Nav from "./Nav";

function FarmerHome({ fid }) {
    const [product, setProduct] = useState({
        pName: '',
        pCategory: '',
        pPrice: '',
        pQuantity: '',
        pWeight: '',
        farmerId: fid
    });

    // Ensure `farmer_id` updates when `fid` changes
    useEffect(() => {
        setProduct(prevProduct => ({
            ...prevProduct,
            farmerId: fid
        }));
    }, [fid]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page reload
        try {
            await axios.post(`http://localhost:8080/product/add`, product);
            window.alert("Product Added Successfully!");
            setProduct({
                pName: '',
                pCategory: '',
                pPrice: '',
                pQuantity: '',
                pWeight: '',
                farmerId: fid
            }); // Reset form after submission
        } catch (error) {
            console.error("Error adding product:", error);
            window.alert("Failed to add product. Please try again.");
        }
    };

    return (
        <>

        <nav className="farmerhome-nav">
                <h1 className="fname">Welcome Farmer!</h1>
                <h3 className="logout"><a href="/">Logout</a></h3>    
            </nav>
        <div className="farmer-home">
            
        <h4>Add Your Product</h4>
            <form onSubmit={handleSubmit}>

                <input type="text" name="pName" placeholder="Product Name" onChange={handleInputChange} value={product.pName} required />
                <input type="text" name="pCategory" placeholder="Product Category" onChange={handleInputChange} value={product.pCategory} required />
                <input type="text" name="pPrice" placeholder="Product Price" onChange={handleInputChange} value={product.pPrice} required />
                <input type="text" name="pQuantity" placeholder="Product Quantity" onChange={handleInputChange} value={product.pQuantity} required />
                <input type="text" name="pWeight" placeholder="Product Weight" onChange={handleInputChange} value={product.pWeight} required />

                <button type="submit">Add</button>
            </form>
        </div>
        </>
    );
}

export default FarmerHome;
