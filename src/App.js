import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Impact from "./components/Impact";
import Advantage from "./components/Advantage";
import Commercial from "./components/Commercial";
import WhyIndia from "./components/WhyIndia";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App bg-neutral-950">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Impact />
      <Advantage />
      <Commercial />
      <WhyIndia />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
