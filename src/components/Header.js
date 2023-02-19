import React from "react";
import './styles.css';

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">Aspiring</span>
          <span className="line"></span>
          <span className="line">
            <span className="color">Front-end</span> Web Developer.
          </span>
        </h1>
        <div className="buttons">
          <a href="https://github.com/Alas-3">My Github</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;