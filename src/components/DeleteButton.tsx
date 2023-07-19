import React from "react";
import { Trash2 } from "lucide-react";

export default function DeleteButton({ onClick }) {
  return (
    <button onClick={onClick}>
      <Trash2 />
    </button>
  );
}
