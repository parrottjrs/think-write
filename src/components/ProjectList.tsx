import React, { useEffect, useState } from "react";
import NavigateToEdit from "./NavigateToEdit";
import DeleteButton from "./DeleteButton";
import { getLocalProjects } from "../utils/utils";

export default function ProjectList() {
  const localProjects = getLocalProjects();
  const [projects, setProjects] = useState(localProjects);

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
          {title ? title : "Untitled Project"}
        </div>
        <div className="p-4 border-b hover:bg-gray-50">{modified}</div>
        <div className="p-4 border-b hover:bg-gray-50">
          <NavigateToEdit id={id} />
          <DeleteButton onClick={() => deleteProject(id)} />
        </div>
      </React.Fragment>
    );
  });
}
