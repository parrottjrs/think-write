import React from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { LOCAL_PROJECTS } from "../utils/utils";

export default function NotesList() {
  return LOCAL_PROJECTS.map((project) => {
    const { id, title, modified } = project;
    return (
      <React.Fragment key={id}>
        <div className="p-4 border-b hover:bg-gray-50">
          {title ? title : ""}
        </div>
        <div className="p-4 border-b hover:bg-gray-50">{modified}</div>
        <div className="p-4 border-b hover:bg-gray-50">
          <EditButton id={id} />
          <DeleteButton id={id} />
        </div>
      </React.Fragment>
    );
  });
}
