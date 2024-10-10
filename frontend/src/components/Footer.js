import React from 'react';
import '../styles/Footer.css'; // Adjust the path based on your structure

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>My Website</h3>
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/userdetails">User Details</a></li>
          <li><a href="/admin">Admin</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
