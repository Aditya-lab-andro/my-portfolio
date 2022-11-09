import React from 'react';
import ME from '../../assets/pic.jpg';
import { FaAward } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h2>Passionate</h2>
                <small>Motivated</small>
              </article>
              <article className="about__card">
                <FaAward className="about__icon" />
                <h2>Persevere</h2>
                <small>Can tackle any difficulty</small>
              </article>
              <article className="about__card">
                <FaAward className="about__icon" />
                <h2>Constructive</h2>
                <small>Positive thinking</small>
              </article>
            </div>
            <p>
              First of all thanks for visiting on my portfolio website. My name
              is Aditya Agarwal currently i am a 3rd year B.Tech student ,
              passionate about coding, loves to solve problems. I believe that
              Programming is a superpower that we have right now. This
              superpower has the ability to change this world and can improve
              our way of living and makes things more advance and i wanted to be
              the part of this change and also want create an impact on the
              society.
            </p>
            <a href="#" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
