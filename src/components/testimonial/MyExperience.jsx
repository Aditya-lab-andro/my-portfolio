import React from 'react';
import './myExp.css';

const MyExperience = () => {
  return (
    <section id="myExp">
      <h5>Industry experience I have</h5>
      <h2>Experience</h2>
      <div className="container myExp__container">
        <div className="experience">
          <div className="position-in-company">
            <h2>
              <i>Software Developer Intern</i>
            </h2>
          </div>
          <div className="company-name">
            <h3>Shodshala pvt. ltd.</h3>
          </div>
          <div className="about-work-in-company">
            <ul className="about-work">
              <li>• Developed UI of a website using Figma</li>
              <li>• Implemented that UI using HTML,CSS and Javascript</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
