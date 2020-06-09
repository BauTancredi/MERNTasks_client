import React from "react";
import Project from "./Project";

const ListProjects = () => {
  const proyects = [
    { name: "Tienda Virtual" },
    { name: "Intranet" },
    { name: "Diseño de sitio web" },
  ];
  return (
    <ul className="listado-proyectos">
      {proyects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  );
};

export default ListProjects;
