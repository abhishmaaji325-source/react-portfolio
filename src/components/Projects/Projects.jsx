import "./Projects.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;