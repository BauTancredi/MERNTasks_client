import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";

const ListTasks = () => {
  const tasks = [
    { name: "Choose platform", status: true },
    { name: "Choose colors", status: true },
    { name: "Choose hosting", status: false },
  ];

  // Obtain state
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  if (!project) return <h2>Select a project</h2>;

  const [actualProject] = project;

  return (
    <Fragment>
      <h2>Project: {actualProject.name}</h2>
      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">No tasks available</li>
        ) : (
          tasks.map((task) => <Task task={task} />)
        )}
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => deleteProject(actualProject.id)}
      >
        Delete project &times;
      </button>
    </Fragment>
  );
};

export default ListTasks;
