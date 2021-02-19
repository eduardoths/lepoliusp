function ProjectsCards (props) {
  return (
    <div className="card-and-icon">
      <div className="project-card">
        <h2 className="project-card-title">{props.title}</h2>
        <p className="project-card-text">
          {props.children}
        </p>
      </div>
      <img src={props.src} className="project-img"/>
    </div>
  );
}

export default ProjectsCards;