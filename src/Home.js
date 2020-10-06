// rfce for creating react component
import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">

                <div className="home_image">
                   <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Ankit/Credit-Card-Bill_1500x600_3._CB403387722_.jpg" alt="background_img"></img>
                </div>

                <div className="home_row">
                    <Product />
                    <Product />
                    
                </div>

                <div className="home_row">
                    <Product />
                    <Product />
                    <Product />
                    
                </div>

                <div className="home_row">
                     <Product />
                </div>
            </div>
            
        </div>
    )
}

export default Home
