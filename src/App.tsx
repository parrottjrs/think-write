import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Editor from "./pages/Editor";
import Save from "./pages/Save";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/edit/:id" element={<Editor />} />
        <Route path="/edit/:id/save" element={<Save />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
