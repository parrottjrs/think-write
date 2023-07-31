import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Editor from "./pages/Editor";
import Save from "./pages/Save";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="think-write/" element={<Home />} />
      <Route path="think-write/projects" element={<Projects />} />
      <Route path="think-write/edit/:id" element={<Editor />} />
      <Route path="think-write/edit/:id/save" element={<Save />} />
    </Routes>
  );
}
