import React, { useReducer } from "react";
import taskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import { TASKS_PROJECT, ADD_TASK } from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { name: "Choose platform", status: true, projectId: 1 },
      { name: "Choose colors", status: true, projectId: 2 },
      { name: "Choose hosting", status: false, projectId: 3 },
    ],
    tasksProject: null,
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  // Obtain project tasks

  const obtainTasks = (projectId) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectId,
    });
  };

  // Add a new tasks
  const addTask = (task) => {
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        tasksProject: state.tasksProject,
        obtainTasks,
        addTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
