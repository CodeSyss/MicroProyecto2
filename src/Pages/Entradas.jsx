import React from "react";
import './Entradas.css';
import "../assets/styles/header-s.css";
import Header from "../component/Header.jsx";
import Navbar from "../component/Navbar.jsx";
import { PRODUCTS } from '../products.js'
import { Product } from "./Product.jsx";


const Entradas = () => {
    

    return (
        
        <>  
            <div className="nav-menu"><Navbar /></div>

            <div className="products">
                {" "}
                {PRODUCTS.map((product) => (
                    <Product data={product}/>
                ))}

            </div>

            <div className="headerc"><Header/></div>     
        </>
    );
    } 
export default Entradas; 