import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";
import projectContext from "../../context/projects/projectContext";

const Task = ({ task }) => {
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const [actualProject] = project;

  const tasksContext = useContext(taskContext);
  const { deleteTask, obtainTasks, updateTask, saveActualTask } = tasksContext;

  const handleClick = (id) => {
    deleteTask(id, actualProject._id);
    obtainTasks(actualProject.id);
  };

  const changeState = (task) => {
    task.status ? (task.status = false) : (task.status = true);

    updateTask(task);
  };

  const selectTask = (task) => {
    saveActualTask(task);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>

      <div className="estado">
        {task.status ? (
          <button
            type="button"
            className="completo"
            onClick={() => changeState(task)}
          >
            Complete
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => changeState(task)}
          >
            Incomplete
          </button>
        )}
      </div>

      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => selectTask(task)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => handleClick(task._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
