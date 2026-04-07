import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Full Stack Developer & Data Analyst</h1>
          <p> Passionate about building scalable web applications and transforming data into meaningful insights.</p>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact Me</button>
        </div>
        <div className="hero-image">
          <img src="/images/profile.jpeg" alt="Rekha Photo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;