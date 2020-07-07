import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  FORM_PROJECT,
  OBTAIN_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FROM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
  PROJECT_ERROR,
} from "../../types";

import clientAxios from "../../config/axios";

const ProjectState = (props) => {
  const initialState = {
    form: false,
    projects: [],
    errorform: false,
    project: null,
    message: null,
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
  const obtainProjects = async () => {
    try {
      const result = await clientAxios.get("/api/projects");

      dispatch({
        type: OBTAIN_PROJECTS,
        payload: result.data,
      });
    } catch (error) {
      const alert = {
        msg: "There has been an error",
        category: "alerta-error",
      };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  // Add new project
  const addNewProject = async (project) => {
    try {
      const result = await clientAxios.post("/api/projects", project);
      dispatch({
        type: ADD_PROJECT,
        payload: result.data,
      });
    } catch (error) {
      const alert = {
        msg: "There has been an error",
        category: "alerta-error",
      };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
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
  const deleteProject = async (projectId) => {
    try {
      await clientAxios.delete(`/api/projects/${projectId}`);
      dispatch({
        type: DELETE_PROJECT,
        payload: projectId,
      });
    } catch (error) {
      const alert = {
        msg: "There has been an error",
        category: "alerta-error",
      };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        errorform: state.errorform,
        project: state.project,
        message: state.message,
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
