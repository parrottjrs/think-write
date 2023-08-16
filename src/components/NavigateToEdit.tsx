import React from "react";

import { Pencil } from "lucide-react";
import { STYLES } from "../utils/constants";

export default function NavigateToEdit({ id }) {
  return (
    <a
      href={`#/edit/${id}`}
      aria-label="Open a new session or edit past sessions"
    >
      <Pencil className={STYLES.PENCIL} strokeWidth={1} />
    </a>
  );
}
