import React from "react";
import { Trash2 } from "lucide-react";

export default function DeleteButton({ onClick }) {
  return (
    <button className="hover:text-neutral-400" onClick={onClick}>
      <Trash2 />
    </button>
  );
}
