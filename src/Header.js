import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (    
        <div className="header">
            <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt ="amazon logo"/>
        

            <div className ="header_search">
                <input className ="header_searchInput" type="text" ></input>
                <SearchIcon className="header_searchIcon"></SearchIcon>
            </div>

            <div className="header_nav">

                <div className="header_option">
                    <span className="header_optionLineOne">
                        hello
                    </span>
                    <span className="header_optionLineTwo">
                        Sign In
                    </span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">
                        Return
                    </span>
                    <span className="header_optionLineTwo">
                         & Order
                    </span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>

                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="optionLineTwo header_basketCount">0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
