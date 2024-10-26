import React from "react";
import Contact from "../components/Contact";

function Products() {

    return (
        <>
            <h1>Products</h1>
    
            <div id="products">
                <article className="product-card">
                    <img src="/images/kadarius-seegars-Mxy5gokl8mE-unsplash.jpg" alt="..." />
                    <h2>Hair and Scalp Nourishment</h2>
                    <p className="prices">$25</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et possimus vel repudiandae esse!</p>

                    <button className="buy-button">Buy Now</button>
                </article>

                <article className="product-card">
                    <img src="/images/devin-avery-zZm7th0E47M-unsplash.jpg" alt="..." />
                    <h2>Deep Cleanse Facial Treatment Set</h2>
                    <p className="prices">$50</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et possimus vel repudiandae esse!</p>
                    <button className="buy-button">Buy Now</button>
                </article>

                <article className="product-card">
                    <img src="/images/product3.jpg" alt="..." />
                    <h2>Head Wraps & Loc Socks</h2>
                    <p className="prices">$10</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et possimus vel repudiandae esse!</p>
                    <button className="buy-button">Buy Now</button>
                </article>
            </div>

            <Contact />
        </>
    )
}

export default Products;