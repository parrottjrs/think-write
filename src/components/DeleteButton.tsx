import React, { useRef } from "react";
import { Trash2 } from "lucide-react";

export default function DeleteButton({ onClick }) {
  const width = useRef(window.innerWidth);
  const size = width.current < 768 ? 16 : 24;
  return (
    <button className="hover:text-neutral-400" onClick={onClick}>
      <Trash2 size={size} />
    </button>
  );
}
