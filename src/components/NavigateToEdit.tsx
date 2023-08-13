import React from "react";

import { Pencil } from "lucide-react";

export default function NavigateToEdit({ id }) {
  return (
    <a
      href={`#/edit/${id}`}
      aria-label="Open a new session or edit past sessions"
    >
      <Pencil
        className="p-0.5 md:p-0 mr-5 hover:text-yellow-400"
        strokeWidth={1}
      />
    </a>
  );
}
