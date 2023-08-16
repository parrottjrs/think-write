import { Pencil } from "lucide-react";
import React from "react";
import { STYLES } from "../utils/constants";

export default function EditButton({ onClick }) {
  return (
    <button id="edit" onClick={onClick}>
      <Pencil className={STYLES.PENCIL} strokeWidth={1} />
    </button>
  );
}
