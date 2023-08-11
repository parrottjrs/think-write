import React, { useRef } from "react";

import { Pencil } from "lucide-react";

export default function NavigateToEdit({ id }) {
  const width = useRef(window.innerWidth);
  const size = width.current < 768 ? 16 : 24;
  return (
    <a
      href={`/think-write/edit/${id}`}
      aria-label="Open a new session or edit past sessions"
    >
      <Pencil
        className="mr-5 hover:text-yellow-400"
        size={size}
        strokeWidth={1}
      />
    </a>
  );
}
