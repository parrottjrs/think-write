import React from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

export default function NotesList() {
  return (
    <div className="sm-w-1/2 self-center bg-white">
      <div className="border-x border-t grid grid-cols-3  place-content-evenly">
        <div className="p-4 bg-gray-100">Title</div>
        <div className="p-4 bg-gray-100">Last Edit</div>
        <div className="p-4 bg-gray-100"></div>
        <div className="p-4 border-b hover:bg-gray-50">note 1</div>
        <div className="p-4 border-b hover:bg-gray-50">june 12, 2023</div>
        <div className="p-4 border-b hover:bg-gray-50">
          <EditButton />
          <DeleteButton />
        </div>
      </div>
    </div>
  );
}
