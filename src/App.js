import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import { ContactInfo } from "./Components/ContactInfo";
import './App.css';
import Navbar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import { Skills } from "./Components/Skills";

const App = () => {
  return (
    <>      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<ContactInfo />} />
        </Routes>
      </div>
    </>

  );
}

export default App;

