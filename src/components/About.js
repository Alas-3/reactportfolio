import React from "react";
import "./styles.css";

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Ace.</h4>
            <p>
              I am a Aspiring Front-end Web Developer currently a 2nd Year BSIT student studying at Our Lady of Fatima University.
            </p>
            <p>
              
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a Programmer.</h4>
            <p>
              For the front-end I started working with HTML, CSS and JavaScript. Right now I am currently learning ReactJS and creating this small
              portfolio is a way for me to learn and also practice my skills in ReactJS and web design as well.
            </p>
            <p>
              For the back-end I have worked with PHP and SQL. Although I am not confident on my skills on back-end development I do have a
              rough understanding how to do back-end development.
            </p>
          </div>
          
        </article>
      </div>
    </section>
  );
};

export default About;