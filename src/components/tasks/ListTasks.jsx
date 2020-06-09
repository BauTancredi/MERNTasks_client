import React, { Fragment } from "react";
import Task from "./Task";

const ListTasks = () => {
  const tasks = [
    { name: "Choose platform", status: true },
    { name: "Choose colors", status: true },
    { name: "Choose hosting", status: false },
  ];

  return (
    <Fragment>
      <h2>Project: Tienda Virtual</h2>
      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">No tasks available</li>
        ) : (
          tasks.map((task) => <Task task={task} />)
        )}
      </ul>

      <button type="button" className="btn btn-eliminar">
        Delete project &times;
      </button>
    </Fragment>
  );
};

export default ListTasks;
