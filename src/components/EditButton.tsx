import { Pencil } from "lucide-react";
import React from "react";

export default function EditButton({ onClick }) {
  return (
    <button id="edit" onClick={onClick}>
      <Pencil
        className="p-0.5 md:p-0 text-slate-300 hover:text-yellow-400"
        strokeWidth={1}
      />
    </button>
  );
}
