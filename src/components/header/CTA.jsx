import React from 'react';
import CV from '../../assets/cv.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/14nsQQ615mvi0kk5szcelftYb7Z2xHDtu/view?usp=sharing"
        target="__blank"
        className="btn"
      >
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
