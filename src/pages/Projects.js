import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';

import '../styles/Projects.css';


function Projects() {
  return (
    <div className="projects">
      <h1 > Projects</h1>
      <script>
        function move(){

          window.location.href = "https://fi-lime.vercel.app/"
        }
      </script>
      <div className="projectList">
      {ProjectList.map((project, idx) => {
        return (
          <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
        </div>
        </div>
        );
      }
export default Projects;
