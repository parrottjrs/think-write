import React, { useEffect, useState } from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { LOCAL_PROJECTS } from "../utils/utils";

export default function NotesList() {
  const [projects, setProjects] = useState(LOCAL_PROJECTS);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const deleteProject = (id) => {
    setProjects((currentProjects) => {
      return currentProjects.filter((project) => project.id !== id);
    });
  };

  return projects.map((project) => {
    const { id, title, modified } = project;
    return (
      <React.Fragment key={id}>
        <div className="p-4 border-b hover:bg-gray-50">
          {title ? title : ""}
        </div>
        <div className="p-4 border-b hover:bg-gray-50">{modified}</div>
        <div className="p-4 border-b hover:bg-gray-50">
          <EditButton id={id} />
          <DeleteButton deleteProject={deleteProject} id={id} />
        </div>
      </React.Fragment>
    );
  });
}
