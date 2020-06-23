import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const ListTasks = () => {
  const tasks = [];

  // Obtain state of projects
  const projectsContext = useContext(projectContext);
  const { project, deleteProject } = projectsContext;

  // Obtain state of tasks
  const tasksContext = useContext(taskContext);
  const { tasksProject } = tasksContext;

  if (!project) return <h2>Select a project</h2>;

  const [actualProject] = project;

  return (
    <Fragment>
      <h2>Project: {actualProject.name}</h2>
      <ul className="listado-tareas">
        {tasksProject.length === 0 ? (
          <li className="tarea">No tasks available</li>
          ) :
         <TransitionGroup>
          {
            tasksProject.map((task) => (
              <CSSTransition key={task.id} timeout={200} classNames='tarea'>
                <Task  task={task} />
              </CSSTransition>
            ))
          }
         </TransitionGroup>
        }
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
