import React from "react";
import './Navbar.css';

const Navbar = (props) => {
  let url = "";
  return (
    <header>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="logo">
          <h3>HOME-LY</h3>
        </div>
        
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <ul>
            <li><a href={url}>Features</a></li>
            <li><a href={url}>Pricing</a></li>
            <li><a href={url}>Testimonials</a></li>
            <li><a href={url} className="btn">Sign up</a></li>
          </ul>
        </div>

        <div className="overlay"></div>
      </div>
    </header>
  );
};

export default Navbar;
