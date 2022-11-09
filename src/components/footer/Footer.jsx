import React from 'react';
import './footer.css';
import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        Aditya Agarwal
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/aditya-agarwal-36b54b1b4/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Aditya-lab-andro">
          <BsGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Aditya Agarwal. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
