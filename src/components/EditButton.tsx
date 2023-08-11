import { Pencil } from "lucide-react";
import React, { useRef } from "react";

export default function EditButton({ onClick }) {
  const width = useRef(window.innerWidth);
  const size = width.current < 768 ? 16 : 24;
  return (
    <button id="edit" onClick={onClick}>
      <Pencil
        className="text-slate-300 hover:text-yellow-400"
        size={size}
        strokeWidth={1}
      />
    </button>
  );
}
