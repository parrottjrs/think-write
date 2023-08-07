import React, { useRef } from "react";
import { Trash2 } from "lucide-react";

export default function DeleteButton({ onClick }) {
  const width = useRef(window.innerWidth);
  const size = width.current < 768 ? 16 : 24;
  return (
    <button
      id-al
      aria-label="Delete this project"
      className="hover:text-red-400"
      onClick={onClick}
    >
      <Trash2 size={size} />
    </button>
  );
}
