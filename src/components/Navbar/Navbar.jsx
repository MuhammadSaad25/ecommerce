import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cart from "../assets/cart.png";
import usericon from "../assets/usericon.png";
const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/signup">
        <button>Register</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>

      <Link>
        <div className="cart-btn">
          <img src={cart} alt="cart icon" />
          <span className="cart-icon-css">0</span>
        </div>
      </Link>

      <Link>
        <div className="cart-btn">

          <img src={usericon} alt="user-icon" className="profile-icon" />
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
