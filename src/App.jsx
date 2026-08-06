import React from "react";
import Nav from "./Component/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import ProjectDetail from './pages/ProjectDetail.jsx'
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* Nav is placed at the top of the page so that it's always visible across all sections */}
      <Nav />
      {/* Route components will be rendered here based on the current URL path. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;
