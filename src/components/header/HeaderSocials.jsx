import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/aditya-agarwal-36b54b1b4/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Aditya-lab-andro">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
