import React from "react";
import { Trash2 } from "lucide-react";

export default function DeleteButton({ onClick }) {
  return (
    <button aria-label="Delete this project" onClick={onClick}>
      <Trash2 className="p-0.5 md:p-0 hover:text-red-400" strokeWidth={1} />
    </button>
  );
}
