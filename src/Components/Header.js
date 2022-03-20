import React from 'react';
import "./Header.css";
import PropTypes from 'prop-types';

import logo from "./logo.png";
export default function Header() {
  return (
        <nav className='Navbar'>
      <div className="main">
        <div className='mainLogo'>
          <img src={logo} alt='amazonlogo'>
          </img>
        </div>

        <div className="mainNav">
          <div className="mainOption">
            <span className="header__home">Home</span>
          </div>

          <div className="mainOption">
            <span className="mainFeatured">Featured</span>
          </div>

          <div className="mainOption">
            <span className="header__products">Products</span>
          </div>
        </div>

      </div>
    </nav>
   
      
  )
}
  Header.defaultProps={
	title: "YourTitle here"
}

Header.propTypes = {
  title: PropTypes.string
};

