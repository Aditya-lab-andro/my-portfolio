import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import MyExperience from './components/testimonial/MyExperience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience></Experience>
      <Portfolio></Portfolio>
      <MyExperience />
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default App;
