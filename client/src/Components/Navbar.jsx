import React from 'react';
import { Link } from 'react-router-dom';
import  "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
    <h1 className="company-name">Government Finance Tracker - Track My Tax</h1>
      <div className="nav-content">
        <ul className="nav-list">
          <li><Link to="/home">Home</Link></li>
          {/*<li><Link to="/CentralGov">Central Gov</Link></li>*/}
          <li><Link to="/About">About</Link></li>
          {/* <li><Link to="/Contact>">Contact</Link></li> */}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
