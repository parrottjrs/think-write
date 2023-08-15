import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Editor from "./pages/Editor";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/edit/:id" element={<Editor />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
