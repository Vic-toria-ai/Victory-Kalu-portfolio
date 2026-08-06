import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
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
      </Routes>
    </div>
  );
}

export default App;
