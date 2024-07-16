import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Projects from "./components/Projects/Projects.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
