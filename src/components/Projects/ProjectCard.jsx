import "./Projects.css";

function ProjectCard({ title, description, image, github }) {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <h3>{title}</h3>
      <p>{description}</p>

      <a href={github} target="_blank" rel="noreferrer">
        View Code
      </a>
    </div>
  );
}

export default ProjectCard;