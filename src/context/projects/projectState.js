import React, { useReducer } from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_PROJECT, OBTAIN_PROJECTS } from "../../types";

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "Tienda Virtual" },
    { id: 2, name: "Intranet" },
    { id: 3, name: "Diseño de sitio web" },
  ];
  const initialState = {
    form: false,
    projects: [],
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

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        showForm,
        obtainProjects,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
