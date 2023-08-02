import React from "react";

import { Pencil } from "lucide-react";

export default function NavigateToEdit({ id }) {
  return (
    <a
      href={`/think-write/edit/${id}`}
      className="inline-block hover:text-neutral-400"
    >
      <Pencil className="mx-5" />
    </a>
  );
}
