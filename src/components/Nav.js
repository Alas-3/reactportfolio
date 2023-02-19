import React from "react";
import './styles.css';

const Nav = props => {
  return (
    <React.Fragment>
      <nav class="navbar">
      <div class="navbar__container">
        <a href="#welcome-section" id="navbar__logo"><h1>Alas</h1></a>
        <ul class="navbar__menu">
          <li class="navbar__item">
            <a href="#about" class="navbar__links" id="services-page">About Me</a>
          </li>
          <li class="navbar__btn">
            <a href="registration.html" class="button" id="signup"><span>---</span></a>
          </li>
        </ul>
      </div>
    </nav>
    </React.Fragment>
  );
};

export default Nav;