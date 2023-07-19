import React from "react";

import { Pencil } from "lucide-react";

export default function NavigateToEdit({ id }) {
  return (
    <a href={`/think-write/edit/${id}`} className="inline-block">
      <Pencil className="mx-5" />
    </a>
  );
}
