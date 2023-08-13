import React from "react";

export default function ProjectsNavButton() {
  return (
    <a
      href="#/projects"
      aria-label="Navigate to projects"
      className="self-center bg-blue-500 hover:bg-blue-700 text-white font-thin tracking-wider py-2 px-4 border border-blue-700 rounded m-10"
    >
      To Projects
    </a>
  );
}
