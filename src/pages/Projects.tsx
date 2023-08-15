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
        <div className="w-4/5">
          <h3 className="mt-10 mb-3 mx-auto text-md md:text-xl text-red-300">
            An Important Note:
          </h3>
          <p className="text-s md:text-lg text-slate-300 font-thin tracking-wider">
            In its current state, Think-Write saves all data in your browser.
            This will hopefully be changed in the coming months, but until then
            please remember: If you clear your browser's history{" "}
            <span className="text-red-300">all your data will be lost</span>. It
            is very important to maintain your browser's local storage or save
            your text elsewhere if you cannot do this. It's not ideal, but it's
            only for now, and we don't want your hard work to be lost!
          </p>
        </div>
      </div>
    </div>
  );
}
