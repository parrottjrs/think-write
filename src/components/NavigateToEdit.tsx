import React, { useRef } from "react";

import { Pencil } from "lucide-react";

export default function NavigateToEdit({ id }) {
  const width = useRef(window.innerWidth);
  const size = width.current < 768 ? 20 : 24;
  return (
    <a
      href={`/think-write/edit/${id}`}
      className="inline-block hover:text-neutral-400"
    >
      <Pencil className="mx-5" size={size} />
    </a>
  );
}
