import React, { useRef } from "react";

import { Pencil } from "lucide-react";

export default function NavigateToEdit({ id }) {
  const width = useRef(window.innerWidth);
  const size = width.current < 768 ? 16 : 24;
  return (
    <a href={`/think-write/edit/${id}`} className="hover:text-neutral-400">
      <Pencil className="mx-2 md:mr-5 md: ml-0" size={size} />
    </a>
  );
}
