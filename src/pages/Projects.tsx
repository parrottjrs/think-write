import React from "react";
import ProjectList from "../components/ProjectList";
import CreateButton from "../components/CreateButton";
import Navbar from "../components/Navbar";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <div className="flex flex-row justify-center">
        <div className="text-xs md:text-lg w-4/5 md:w-2/3  my-5 md:mt-20 md:mb-10 ">
          <div className="grid grid-cols-3  place-content-evenly ">
            <div className="py-4 px-2 md:p-4 bg-gray-800/75 text-white font-thin tracking-wider">
              Title
            </div>
            <div className="py-4 px-2 md:p-4 bg-gray-800/75 text-white font-thin tracking-wider">
              Last Edit
            </div>
            <div className="py-4 px-2 bg-gray-800/75 text-white font-thin tracking-wider">
              Actions
            </div>
            <ProjectList />
          </div>
        </div>
      </div>
      <CreateButton />
    </div>
  );
}
