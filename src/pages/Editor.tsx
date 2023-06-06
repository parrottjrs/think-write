import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveButton from "../components/SaveButton";

export default function Editor() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <SaveButton text={value} />
    </div>
  );
}
