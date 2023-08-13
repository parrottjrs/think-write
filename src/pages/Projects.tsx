import React from "react";
import ProjectList from "../components/ProjectList";
import CreateButton from "../components/CreateButton";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-3  place-content-evenly text-xs md:text-lg w-4/5 md:w-2/3  mb-5 md:mb-10">
          <div className="py-4 px-2 md:p-4 bg-slate-800/25 text-white font-thin tracking-wider">
            Title
          </div>
          <div className="py-4 px-2 md:p-4 bg-slate-800/25 text-white font-thin tracking-wider">
            Last Edit
          </div>
          <div className="py-4 px-2 bg-gray-800/25 text-white font-thin tracking-wider">
            Actions
          </div>
          <ProjectList />
        </div>
        <CreateButton />
      </div>
    </div>
  );
}
