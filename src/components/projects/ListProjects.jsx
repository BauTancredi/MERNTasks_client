import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";
import AlertContext from "../../context/alerts/alertContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListProjects = () => {
  // Obtain state
  const projectsContext = useContext(projectContext);
  const { projects, obtainProjects, message } = projectsContext;

  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  useEffect(() => {
    // If error
    if (message) {
      showAlert(message.msg, message.category);
    }

    obtainProjects();
    // eslint-disable-next-line
  }, [message]);

  if (projects.length === 0) return <p>No projects, create one</p>;

  return (
    <ul className="listado-proyectos">
      {alert ? (
        <div className={`alerta ${alert.category}`}>{alert.message}</div>
      ) : null}
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project._id} timeout={200} classNames="proyecto">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListProjects;
