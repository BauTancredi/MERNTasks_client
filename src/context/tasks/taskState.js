import React, { useReducer } from "react";
import taskContext from "./taskContext";
import TaskReducer from "./taskReducer";
import { TASKS_PROJECT, ADD_TASK, VALIDATE_TASK, DELETE_TASK, STATE_TASK } from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, name: "Choose platform", status: true, projectId: 1 },
      { id: 4, name: "Choose platform", status: true, projectId: 1 },
      { id: 2, name: "Choose colors", status: true, projectId: 2 },
      { id: 3, name: "Choose hosting", status: false, projectId: 3 },
    ],
    tasksProject: null,
    errorTask: false,
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

  // Validate error
  const validateTask = (e) => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };

  // Delete task
  const deleteTask = id => { 
    dispatch({
      type: DELETE_TASK,
      payload: id
    })
  }

  // Change task state
  const changeTaskState = task => { 
    dispatch({
      type: STATE_TASK,
      payload: task
    })
  }

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        tasksProject: state.tasksProject,
        errorTask: state.errorTask,
        obtainTasks,
        addTask,
        validateTask,
        deleteTask,
        changeTaskState
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
