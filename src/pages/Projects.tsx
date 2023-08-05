import React from "react";
import ProjectList from "../components/ProjectList";
import CreateButton from "../components/CreateButton";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <div className="flex flex-col justify-center ">
      <Navbar writing={false} />
      <div className="flex flex-row justify-center">
        <div className="text-xs md:text-lg w-3/4 md:w-1/2  my-5 md:mt-20 md:mb-10 ">
          <div className="grid grid-cols-3  place-content-evenly ">
            <div className="py-4 px-2 md:p-4 bg-gray-800/75 text-slate-400 font-extralight tracking-wider">
              Title
            </div>
            <div className="py-4 px-2 md:p-4 bg-gray-800/75 text-slate-400 font-extralight tracking-wider">
              Last Edit
            </div>
            <div className="py-4 px-2 bg-gray-800/75 text-slate-400 font-extralight tracking-wider">
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
