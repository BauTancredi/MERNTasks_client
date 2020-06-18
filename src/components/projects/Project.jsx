import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Project = ({ project }) => {
  // Obtain state of projects
  const projectsContext = useContext(projectContext);
  const { actualProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { obtainTasks } = tasksContext;

  // Add actual project
  const selectProject = (id) => {
    actualProject(id);
    obtainTasks(id);
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
