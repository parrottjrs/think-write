import React from "react";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SaveButton from "../components/SaveButton";
import { useParams } from "react-router-dom";
import HomeButton from "../components/HomeButton";

export default function Editor() {
  const date = new Date();

  const formattedDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const params = useParams();
  const stillHot = JSON.parse(
    localStorage.getItem(params.id ?? "") ?? "{}"
  ).hot;

  const [note, setNote] = useState({
    text: stillHot ?? "",
    date: formattedDate,
  });

  useEffect(() => {
    localStorage.setItem(
      `${params.id}`,
      JSON.stringify({ cold: [], hot: note.text, modified: note.date })
    );
  }, [note]);

  const handleChange = (text) => {
    setNote({
      ...note,
      text,
    });
  };

  return (
    <div className="w-100 flex flex-col">
      <ReactQuill theme="snow" value={note.text} onChange={handleChange} />
      <HomeButton />
      <SaveButton id={params.id} />
    </div>
  );
}
