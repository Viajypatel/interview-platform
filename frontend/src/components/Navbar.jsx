import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Interview Experience Platform</h1>
      <div>
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
