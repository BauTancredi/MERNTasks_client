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

export default (state, action) => {
  switch (action.type) {
    case TASKS_PROJECT:
      return {
        ...state,
        tasksProject: action.payload,
      };
    case ADD_TASK:
      return {
        ...state,
        tasksProject: [action.payload, ...state.tasksProject],
        errorTask: false,
      };
    case VALIDATE_TASK:
      return {
        ...state,
        errorTask: true,
      };
    case DELETE_TASK:
      return {
        ...state,
        tasksProject: state.tasksProject.filter(
          (task) => task.id !== action.payload
        ),
      };
    case UPDATE_TASK:
    case STATE_TASK:
      return {
        ...state,
        tasksProject: state.tasksProject.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case ACTUAL_TASK:
      return {
        ...state,
        selectedTask: action.payload,
      };
    case CLEAN_TASK:
      return {
        ...state,
        selectedTask: null,
      };
    default:
      return state;
  }
};
