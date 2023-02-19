import React from "react";
import './styles.css';
import SocialLinks from "./Socials";

const Footer = props => {
  return (
    <footer>
      <div className="wrapper">
        <h3>THANKS FOR VISITING</h3>
        <p>© {new Date().getFullYear()} Yago Estévez.</p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;