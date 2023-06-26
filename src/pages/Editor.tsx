import React from "react";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveButton from "../components/SaveButton";
import { useParams } from "react-router-dom";
import HomeButton from "../components/HomeButton";
import { formatDate } from "../utils/utils";

export default function Editor() {
  const date = new Date();

  const params = useParams();
  const { sessions = [], hot = "" } = JSON.parse(
    localStorage.getItem(params.id ?? "") ?? "{}"
  );

  const [text, setText] = useState(hot);

  useEffect(() => {
    localStorage.setItem(
      `${params.id}`,
      JSON.stringify({
        hot: text,
        modified: formatDate(date),
        sessions: sessions,
      })
    );
  }, [text]);

  const handleChange = (text) => {
    setText(text);
  };

  return (
    <div>
      <div className="w-100 flex flex-col">
        <div className="w-full lg:w-3/4 self-end">
          <ReactQuill theme="snow" value={text} onChange={handleChange} />
        </div>
        <HomeButton />
        <SaveButton id={params.id} />
      </div>
    </div>
  );
}
