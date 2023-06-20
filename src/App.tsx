import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Editor from "./pages/Editor";
import Save from "./pages/Save";

export default function App() {
  return (
    <Routes>
      <Route path="think-write/" element={<Homepage />} />
      <Route path="think-write/edit/:id" element={<Editor />} />
      <Route path="think-write/edit/:id/save" element={<Save />} />
    </Routes>
  );
}
