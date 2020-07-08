import React, { useReducer } from "react";

import taskContext from "./taskContext";
import TaskReducer from "./taskReducer";

import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATE_TASK,
  ACTUAL_TASK,
  UPDATE_TASK,
  CLEAN_TASK,
} from "../../types";

import clientAxios from "../../config/axios";

const TaskState = (props) => {
  const initialState = {
    tasksProject: [],
    errorTask: false,
    selectedTask: null,
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
  const addTask = async (task) => {
    try {
      const result = await clientAxios.post("/api/tasks", task);
      dispatch({
        type: ADD_TASK,
        payload: task,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Validate error
  const validateTask = (e) => {
    dispatch({
      type: VALIDATE_TASK,
    });
  };

  // Delete task
  const deleteTask = (id) => {
    dispatch({
      type: DELETE_TASK,
      payload: id,
    });
  };

  // Change task state
  const changeTaskState = (task) => {
    dispatch({
      type: STATE_TASK,
      payload: task,
    });
  };

  // Edit task
  const saveActualTask = (task) => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task,
    });
  };

  const updateTask = (task) => {
    dispatch({
      type: UPDATE_TASK,
      payload: task,
    });
  };

  // Delete selected task

  const cleanTask = () => {
    dispatch({
      type: CLEAN_TASK,
    });
  };

  return (
    <taskContext.Provider
      value={{
        tasksProject: state.tasksProject,
        errorTask: state.errorTask,
        selectedTask: state.selectedTask,
        obtainTasks,
        addTask,
        validateTask,
        deleteTask,
        changeTaskState,
        saveActualTask,
        updateTask,
        cleanTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
