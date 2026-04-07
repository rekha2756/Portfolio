import React from 'react';

const Projects = ({ title, projects, loading, bgClass }) => {
  const sectionId = title.includes('Web') ? 'web-projects' : 'data-projects';
  return (
    <section id={sectionId} className={`section ${bgClass}`}>
      <h2>{title}</h2>
      {loading ? (
        <p>Loading projects...</p>
      ) : projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.tech_stack && <small>Tech: {project.tech_stack}</small>}
            {project.live_url && (
              <div><a href={project.live_url} target="_blank" rel="noreferrer">Live Demo →</a></div>
            )}
          </div>
        ))
      )}
    </section>
  );
};

export default Projects;