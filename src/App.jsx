// src/App.jsx file
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import StudyAbroad from "./pages/StudyAbroad";
import Contact from "./pages/Contact";

// New imports
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Main routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/study-abroad" element={<StudyAbroad />} />
        <Route path="/contact" element={<Contact />} />

        {/* Legal pages */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;