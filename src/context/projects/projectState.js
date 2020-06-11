import React, { useReducer } from "react";
import { v4 as uuid } from "uuid";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  FORM_PROJECT,
  OBTAIN_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FROM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
} from "../../types";

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "Tienda Virtual" },
    { id: 2, name: "Intranet" },
    { id: 3, name: "Diseño de sitio web" },
  ];
  const initialState = {
    form: false,
    projects: [],
    errorform: false,
    project: null,
  };

  // Dispatch for actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // CRUD
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  // Obtain projects
  const obtainProjects = () => {
    dispatch({
      type: OBTAIN_PROJECTS,
      payload: projects,
    });
  };

  // Add new project
  const addNewProject = (project) => {
    project.id = uuid();

    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  // Validate form
  const showError = () => {
    dispatch({
      type: VALIDATE_FROM,
    });
  };

  // Select project
  const actualProject = (projectId) => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectId,
    });
  };

  // Delete a project
  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
  };

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        errorform: state.errorform,
        project: state.project,
        showForm,
        obtainProjects,
        addNewProject,
        showError,
        actualProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
