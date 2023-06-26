import React from "react";
import NotesList from "../components/NotesList";
import CreateButton from "../components/CreateButton";

export default function Homepage() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="m-5 text-6xl text-center font-display">Think-Write!</h1>
      <div className="flex flex-row justify-center">
        <div className="sm-w-1/2 self-center bg-white">
          <div className="border-x border-t grid grid-cols-3  place-content-evenly">
            <div className="p-4 bg-gray-100">Title</div>
            <div className="p-4 bg-gray-100">Last Edit</div>
            <div className="p-4 bg-gray-100"></div>
            <NotesList />
          </div>
        </div>
      </div>
      <CreateButton />
    </div>
  );
}
