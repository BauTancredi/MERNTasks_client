import React, { useContext, useState, useEffect } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const FormTask = () => {
  // Obtain state
  const projectsContext = useContext(projectContext);
  const { project } = projectsContext;

  const tasksContext = useContext(taskContext);
  const {
    selectedTask,
    addTask,
    validateTask,
    errorTask,
    obtainTasks,
    updateTask,
    cleanTask,
  } = tasksContext;

  useEffect(() => {
    if (selectedTask !== null) setTask(selectedTask);
    else setTask({ name: "" });
  }, [selectedTask]);

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

    // Edit or new task
    if (selectedTask === null) {
      // Add task to state
      task.projectId = actualProject.id;
      task.state = false;
      addTask(task);
    } else {
      updateTask(task);

      cleanTask();
    }

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
            value={selectedTask ? "Edit Task" : "Add Task"}
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
