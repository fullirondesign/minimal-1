import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <div className="container logo">
          <Link to="/products" className="nav-link">
            <img src="..\icons\logo.png" alt="minimal" href="" />
          </Link>
        </div>
        <div className="container nav">
          <Link to="/products" className="nav-link">
            products
          </Link>
          <Link to="/services" className="nav-link">
            services
          </Link>
          <Link to="/contacts" className="nav-link">
            contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
