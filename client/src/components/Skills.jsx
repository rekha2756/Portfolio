import React from 'react';

const Skills = () => {
  const skills = [
    { title: 'Programming', desc: 'Core Java, Python, SQL' },
    { title: 'Web Technologies', desc: 'HTML, CSS, JavaScript' },
    { title: 'Backend', desc: 'Node.js, Express, REST API' },
    { title: 'Data Tools', desc: 'Tableau, Excel, Python (Pandas)' },
    { title: 'Database', desc: 'MySQL' },
    { title: 'Core CS', desc: 'OOP, DSA (Learning), Problem Solving' }
  ];

  return (
    <section id="skills" className="section light-bg">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;