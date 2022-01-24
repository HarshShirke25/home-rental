import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">Home-ly</div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <a href="" target="_blank">
          Home
        </a>
        <a href="" target="_blank">
          About
        </a>
        <a href="" target="_blank">
          Properties
        </a>
        <a href="" target="_blank">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
