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
        <div className="flex items-center text-xs md:text-lg text-white font-thin tracking-wider p-2 md:p-4  border-gray-500 border-b">
          {title ? title : "Untitled Project"}
        </div>
        <div className="flex items-center text-xs md:text-lg text-white font-thin tracking-wider p-2 md:p-4 border-b border-gray-500 ">
          {modified}
        </div>
        <div className="flex items-center p-2 md:py-4 md:pl-2 border-b text-slate-300 border-gray-500">
          <NavigateToEdit id={id} />
          <DeleteButton onClick={() => deleteProject(id)} />
        </div>
      </React.Fragment>
    );
  });
}
