import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';

const Portfolio = () => {
  const data = [
    {
      id: '1',
      title: 'Dunzo UI clone',
      img: 'https://www.passionateinmarketing.com/wp-content/uploads/2022/01/Dunzo-image.jpg',
      gitHub: 'https://github.com/Aditya-lab-andro/duzo-clone',
      live: 'https://playful-sunburst-20bdaf.netlify.app/',
    },
    {
      id: '2',
      title: 'Dice Game',
      img: 'https://nationaltoday.com/wp-content/uploads/2021/10/National-Dice-Day-640x514.jpg',
      gitHub: 'https://github.com/Aditya-lab-andro/Pig-Game',
      live: 'https://cool-piroshki-b3e1f9.netlify.app/',
    },
    {
      id: '3',
      title: 'Guess the number Game',
      img: 'https://www.funbrain.com/assets/img/content-cards/F2qRmLhRnmebc8jJAUjr_GuessTheNumber%403x.png',
      gitHub: 'https://github.com/Aditya-lab-andro/Guess-the-Number',
      live: 'https://resonant-begonia-bd3480.netlify.app/',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>My Projects</h2>

      <div className="container portfolio__container">
        {data.map((project, index) => {
          return (
            <article
              className="portfolio__item flex-column-space"
              key={project.id}
            >
              <div className="portfolio__item-image">
                <img src={project.img} alt="portfolio" />
              </div>
              <h3>{project.title}</h3>
              <div className="portfolio__item-cta">
                <a href={project.gitHub} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={project.live}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
