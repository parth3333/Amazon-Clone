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

                    <Product 
                    id="1"
                    title="Apple AirPods Pro"
                    price="21,999"
                    image="https://m.media-amazon.com/images/I/71NTi82uBEL._AC_UY218_.jpg"
                    rating={4} />
                    

                    <Product 
                    id="2"
                    title="Samsung Galaxy M31s (Mirage Blue, 6GB RAM, 128GB Storage)"
                    price="19,499"
                    image="https://m.media-amazon.com/images/I/61d-phh4GfL._AC_UY218_.jpg"
                    rating={4} />
                    
                    
                </div>

                <div className="home_row">
                    <Product 
                        id="3"
                        title="Sony Bravia 214.8 cm (85 inches) 4K Ultra HD Certified Android LED TV 85X8000H (Black) (2020 Model)"
                        price="5,69,990"
                        image="https://m.media-amazon.com/images/I/91wbJpp9BsL._AC_UY218_.jpg"
                        rating={5} />
                    

                    <Product 
                        id="4"
                        title="Mrutyunjay (Marathi)"
                        price="450"
                        image="https://m.media-amazon.com/images/I/51Dh28bRmTL._AC_UY218_.jpg"
                        rating={5} />
                    
                    
                    <Product 
                        id="5"
                        title="Bajaj GX 11 750-Watt Mixer Grinder with 3 Jars (White/Blue)"
                        price="3,699"
                        image="https://m.media-amazon.com/images/I/613styUkHML._AC_UL320_.jpg"
                        rating={2} />
                    
                </div>

                <div className="home_row">
                    <Product 
                        id="6"
                        title="HP Pavilion Gaming DK0268TX 15.6-inch Laptop (Core i5-9300H/8GB/512GB SSD/Windows 10 Home/4GB NVIDIA GeForce GTX 1650 Graphics), Shadow Black"
                        price="67,990"
                        image="https://m.media-amazon.com/images/I/81pezrPSgOL._AC_UY218_.jpg"
                        rating={4} />
                    
                </div>
            </div>
            
        </div>
    )
}

export default Home
