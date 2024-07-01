// src/App.js

import React from "react";
import About from "./components/About";
// import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from './components/Socials';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
// import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <WorkExperience />
      <Education />
      <Skills />
      <Socials />
      {/* <Testimonials />
      <Contact /> */}
    </main>
  );
}