import React, { useEffect, useState } from 'react';

import Header from '../../_components/Header';
import ProjectCard from '../../_components/ProjectCard';

import api from '../../services/api';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [reloadProjects, setReloadProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      const response = await api.get('projects');
      setProjects(response.data);
    }

    loadProjects();
  }, [reloadProjects]);

  return (
    <>
      <Header />
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          setReloadProjects={setReloadProjects}
        />
      ))}
    </>
  );
}
