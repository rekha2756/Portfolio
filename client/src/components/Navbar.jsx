import React from 'react';

const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav>
      <h2>Rekha Gadige</h2>
      <ul>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a></li>
        <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}>Skills</a></li>
        <li><a href="#web-projects" onClick={(e) => { e.preventDefault(); scrollTo('web-projects'); }}>Web</a></li>
        <li><a href="#data-projects" onClick={(e) => { e.preventDefault(); scrollTo('data-projects'); }}>Data</a></li>
        <li><a href="#certifications" onClick={(e) => { e.preventDefault(); scrollTo('certifications'); }}>Certifications</a></li>
        <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;