import React from "react";
import { v4 as uuid } from "uuid";
import { STYLES } from "../utils/constants";

export default function CreateButton() {
  return (
    <a
      href={`#/edit/${uuid()}`}
      aria-label="Start a new project"
      className={STYLES.GREEN_BUTTON}
    >
      New Project
    </a>
  );
}
