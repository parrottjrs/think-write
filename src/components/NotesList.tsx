import React from "react";
import DeleteButton from "./DeleteButton";
import image from "../assets/edit.png";

export default function NotesList() {
  return (
    <div className="sm-w-1/2 self-center bg-white">
      <div className="overflow-x-auto border-x border-t">
        <table className="table-auto w-full">
          <thead className="border-b">
            <tr className="bg-gray-100">
              <th className="text-left p-4 font-medium">Title</th>
              <th className="text-left p-4 font-medium">Created on</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4">Note 1</td>
              <td className="p-4">Oct. 23, 2022</td>
              <td>
                <DeleteButton />
              </td>
              <td>
                <img className="m-5" src={image} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
