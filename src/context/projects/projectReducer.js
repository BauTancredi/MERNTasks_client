import {
  FORM_PROJECT,
  OBTAIN_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FROM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        form: true,
      };
    case OBTAIN_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        errorform: false,
      };
    case VALIDATE_FROM:
      return {
        ...state,
        errorform: true,
      };
    case ACTUAL_PROJECT:
      return {
        ...state,
        project: state.projects.filter(
          (project) => project.id === action.payload
        ),
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
        project: null,
      };
    default:
      return state;
  }
};
