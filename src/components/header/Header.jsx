import React from 'react';
import './header.css';
import CTA from './CTA';
import IMG from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aditya Agarwal</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
        {/* <div className="me">
          <img src={IMG} alt="profile-pic" />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
