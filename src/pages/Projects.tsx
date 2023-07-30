import React from "react";
import ProjectList from "../components/ProjectList";
import CreateButton from "../components/CreateButton";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <div className="flex flex-row justify-center">
        <div className="sm-w-1/2 self-center bg-white my-10">
          <div className="border-x border-t grid grid-cols-3  place-content-evenly">
            <div className="p-4 bg-gray-100">Title</div>
            <div className="p-4 bg-gray-100">Last Edit</div>
            <div className="p-4 bg-gray-100"></div>
            <ProjectList />
          </div>
        </div>
      </div>
      <CreateButton />
    </div>
  );
}
