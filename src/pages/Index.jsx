import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <main className="bg-gray-900 min-h-screen">
      <Navbar />
      <section id="home" className="min-h-[100vh] top-[25vh] relative">
        <Hero />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </main>
  );
};

export default Index;
