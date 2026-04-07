import React from 'react';

const Certifications = () => {
  const certs = [
    { img: 'delloite-internship.png', title: 'Deloitte', desc: 'Data Analytics Simulation' },
    { img: 'tata-intenship.png', title: 'TATA', desc: 'GenAI Powered Data Analytics' },
    { img: 'yuva-internship.png', title: 'Yuvaintern', desc: 'Junior Java Developer' },
    { img: 'DSA.png', title: 'Smart Interviews', desc: 'Smart Coder' },
    { img: 'wiser-quantum.png', title: 'Wiser', desc: 'Quantum Fundamentals' },
    { img: 'nptel-db.png', title: 'NPTEL', desc: 'Introduction to Database' },
    { img: 'udemy-python.png', title: 'Udemy', desc: 'Python Basics' },
    { img: 'ibm.png', title: 'IBM', desc: 'AI Literacy' },
    { img: 'infosys-python.png', title: 'Infosys', desc: 'Python Basics' },
    { img: 'hackerrank-python.png', title: 'HackerRank', desc: 'Python (Basic)' },
    { img: 'simplilearn-html.png', title: 'Simplilearn', desc: 'Introduction to HTML' }
  ];

  return (
    <section id="certifications" className="section">
      <h2>Certifications</h2>
      <div className="cert-grid">
        {certs.map((cert, idx) => (
          <div key={idx} className="cert-card">
            <img src={`/images/${cert.img}`} alt={cert.title} />
            <h4>{cert.title}</h4>
            <p>{cert.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;