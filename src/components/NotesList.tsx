import React from "react";
import NoteElement from "./NoteElement";

export default function NotesList() {
  return (
    <div className="sm-w-1/2 self-center bg-white">
      <div className="border-x border-t grid grid-cols-4  place-content-evenly">
        <div className="p-4 bg-gray-100">Title</div>
        <div className="p-4 bg-gray-100">Last Edit</div>
        <div className="p-4 bg-gray-100">Locked Until</div>
        <div className="p-4 bg-gray-100"></div>
        <NoteElement />
      </div>
    </div>
  );
}
