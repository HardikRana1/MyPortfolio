/* File: Services.css */
/* Student Name: Hardik Rana */
/* Student ID: 301379703 */
/* Date: 2024-05-25 */
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../assets/Logo.jpg'; // Adjust the path as needed

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoImage} alt="Logo" />
        <span>My Portfolio</span>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
