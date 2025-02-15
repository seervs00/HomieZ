import React from "react";
import './Header.css';
const Header = () => {
  return (
    <section className="h-wrapper">
      <section className="innerWidth h-container paddings flexCenter">
      <img  className = "logo" src="./logo.png" alt="logo" width={100} />

        <div className=" flexCenter h-menu">
          <a href="">Residencies</a>
          <a href="">Our Values</a>
          <a href=""> Contact Us</a>
          <a href=""> Get Started</a>
          <button className="button">
          <a href="">Contact</a>
          </button>
         
        </div>
      </section>
    </section>
  );
};

export default Header;
