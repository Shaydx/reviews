import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="company">
        <div className="logo">NPS</div>
        <div className="address">Vester Farimagsgade 15</div>
        <div className="copyright">
          <p>Copyright © 2020 All Right Reserved</p>
        </div>
        <ul className="footer-menu">
          <li className="footer-menu-item">Privatlivspolitik</li>
          <li className="footer-menu-item">Forretningsbetingelser</li>
        </ul>
      </div>
      <div className="social-media">
        <span>FB</span>
        <span>YT</span>
        <span>IN</span>
      </div>
    </footer>
  );
};

export default Footer;
