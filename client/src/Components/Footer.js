import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer >
      <div className="Foot">
        <p>&copy; {new Date().getFullYear()} TrackMyTax. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
