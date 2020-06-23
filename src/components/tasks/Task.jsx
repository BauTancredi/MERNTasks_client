import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";
import projectContext from "../../context/projects/projectContext";

const Task = ({ task }) => {


  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const [actualProject] = project

  const tasksContext = useContext(taskContext);
  const { deleteTask, obtainTasks, changeTaskState } = tasksContext;


  const handleClick = id => {
    deleteTask(id)
    obtainTasks(actualProject.id)
  }

  const changeState = task => {
    task.status ? task.status = false : task.status = true;

    changeTaskState(task)
  }

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>

      <div className="estado">
        {task.status ? (
          <button type="button" className="completo" onClick={() => changeState(task)}>
            Complete
          </button>
        ) : (
          <button type="button" className="incompleto" onClick={() => changeState(task)}>
            Incomplete
          </button>
        )}
      </div>

      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Edit
        </button>
        <button type="button" className="btn btn-secundario" onClick={() => handleClick(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
