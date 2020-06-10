import React, { Fragment, useState, useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const NewProject = () => {
  // Obtain state of form
  const projectsContext = useContext(projectContext);
  const { form, showForm } = projectsContext;

  const [project, setProject] = useState({
    name: "",
  });

  const { name } = project;

  const onChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //Validate Project

    // Add to state

    // Reset form
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => showForm()}
      >
        New Project
      </button>

      {form ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Project Name"
            name="name"
            value={name}
            onChange={onChange}
          />

          <input
            type="submit"
            value="Add Project"
            className="btn btn-primario btn-block"
          />
        </form>
      ) : null}
    </Fragment>
  );
};

export default NewProject;
