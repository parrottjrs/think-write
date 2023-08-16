import React, { useEffect, useState } from "react";
import NavigateToEdit from "./NavigateToEdit";
import { getLocalProjects } from "../utils/utils";
import { Warning } from "./Warning";
import { STYLES } from "../utils/constants";

export default function ProjectList() {
  const localProjects = getLocalProjects();
  const [projects, setProjects] = useState(localProjects);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const handleDelete = (id) => {
    setProjects((currentProjects) => {
      return currentProjects.filter((project) => project.id !== id);
    });
  };

  return projects.map((project) => {
    const { id, title, modified } = project;
    return (
      <React.Fragment key={id}>
        <div className={STYLES.PROJECT_GRID_DIV}>
          {title ? title : "Untitled Project"}
        </div>
        <div className={STYLES.PROJECT_GRID_DIV}>{modified}</div>
        <div className={STYLES.PROJECT_GRID_DIV}>
          <NavigateToEdit id={id} />
          <Warning onDelete={() => handleDelete(id)} />
        </div>
      </React.Fragment>
    );
  });
}
