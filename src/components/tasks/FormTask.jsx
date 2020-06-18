import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import { useState } from "react";
import taskContext from "../../context/tasks/taskContext";
import { act } from "react-dom/test-utils";

const FormTask = () => {
  // Obtain state
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { addTask, validateTask, errorTask, obtainTasks } = tasksContext;

  // Form state
  const [task, setTask] = useState({
    name: "",
  });

  const { name } = task;

  if (!project) return null;

  const [actualProject] = project;

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validate
    if (name.trim() === "") {
      validateTask();
      return;
    }

    // Add task to state
    task.projectId = actualProject.id;
    task.state = false;
    addTask(task);

    // Obtian new tasks
    obtainTasks(actualProject.id);

    // Reset form
    setTask({
      name: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task Name..."
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value="Add Tasks"
          />
        </div>
      </form>
      {errorTask ? (
        <p className="mensaje error">Task name is mandatory</p>
      ) : null}
    </div>
  );
};

export default FormTask;
