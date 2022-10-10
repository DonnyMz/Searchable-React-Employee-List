import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
const Header = () => {
  return (
    <header className="App">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <nav className="nav">
        <ul>
          <Link to="/" className="App-link">
            <il>Home</il>
          </Link>
          <Link to="/about" className="App-link">
            <il>About</il>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
