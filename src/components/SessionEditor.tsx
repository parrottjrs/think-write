import React, { useState } from "react";
import ReactQuill from "react-quill";
import { lockCheck } from "../utils/utils";

export default function SessionEditor({ projectId, sessions }) {
  if (sessions.length > 0) {
    let textToRender = "";
    sessions.forEach((session) => {
      if (lockCheck(session)) {
        textToRender += session.text;
      }
    });
    const [text, setText] = useState(textToRender);
    if (textToRender != "")
      return <ReactQuill value={text} onChange={setText} />;
  }
}
