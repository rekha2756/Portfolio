import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  const [webProjects, setWebProjects] = useState([]);
  const [dataProjects, setDataProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const [webRes, dataRes] = await Promise.all([
          axios.get('http://localhost:5000/api/projects/category/web'),
          axios.get('http://localhost:5000/api/projects/category/data')
        ]);
        setWebProjects(webRes.data);
        setDataProjects(dataRes.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects title="Web Development Projects" projects={webProjects} loading={loading} bgClass="" />
      <Projects title="Data Analytics Projects" projects={dataProjects} loading={loading} bgClass="light-bg" />
      <Certifications />
      <Contact />
      <footer>
        <p>© 2026 Rekha Gadige | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;