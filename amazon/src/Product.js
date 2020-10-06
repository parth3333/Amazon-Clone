import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>Apple Watch</p>   
                <p className="product_price">
                    <small>Rs</small>
                    <strong>29000</strong>
                </p>
                <div className="product_rating">
                    <p>⋆</p>
                    <p>⋆</p>
                    <p>⋆</p>
                    <p>⋆</p>
                    
                </div>
                <img src="https://m.media-amazon.com/images/I/71bUKrOPzYL._AC_UL320_.jpg" alt="Apple Watch"></img>
                <button>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product
