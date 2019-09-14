import React, { useEffect, useState } from 'react';

import Header from '../../_components/Header';
import ProjectCard from '../../_components/ProjectCard';

import api from '../../services/api';

export default function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('projects');
      setProjects(response.data);
    }

    loadProjects();
  }, []);

  return (
    <>
      <Header />
      {projects.map((project, index) => (
        <ProjectCard project={project} />
      ))}
    </>
  );
}
