import React, { Fragment, useState } from "react";

const NewProject = () => {
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
      <button type="button" className="btn btn-block btn-primario">
        New Project
      </button>
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
    </Fragment>
  );
};

export default NewProject;
