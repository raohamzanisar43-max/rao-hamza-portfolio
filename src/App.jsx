import React from 'react';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import Background from './components/Background.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Background />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
