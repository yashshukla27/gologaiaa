import React, { useEffect, useRef } from "react";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "./ui/button";
import { mockData } from "../mock";

/* ===============================
   Flowing Dots Background
================================ */
const FlowingDotsBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const DOT_COUNT = 900;

    const dots = Array.from({ length: DOT_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: canvas.height / 2 + Math.sin(Math.random() * Math.PI * 2) * 220,
      speed: 0.25 + Math.random() * 0.4,
      phase: Math.random() * Math.PI * 2,
      size: 0.7 + Math.random() * 0.9,
    }));

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((d) => {
        d.x += d.speed;
        d.y += Math.sin(t * 0.015 + d.phase) * 0.35;

        if (d.x > canvas.width + 20) {
          d.x = -20;
          d.phase = Math.random() * Math.PI * 2;
        }

        const edgeFade = Math.min(
          d.x / 400,
          (canvas.width - d.x) / 400,
          1
        );

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16,185,129,${0.9 * edgeFade})`; // emerald
        ctx.fill();
      });

      t += 1;
      requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

/* ===============================
   Hero Section
================================ */
const Hero = () => {
  const { hero } = mockData;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${hero.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Image darkening + emerald cinematic gradient */}
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/10 z-0" /> 

      {/* Flowing dots */}
      {/* <FlowingDotsBackground /> */}

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 pt-36 pb-28">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-950/60 border border-emerald-700/40 rounded-full px-4 py-2 mb-10 backdrop-blur">
            <Leaf size={14} className="text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">
              Regional Biochar Infrastructure
            </span>
          </div>

          {/* Headline */}
  <h1 className="
  text-[44px] 
  md:text-[64px] 
  lg:text-[72px]
  font-semibold
  tracking-tight
  leading-[1.08]
  text-white
  max-w-[720px]
">
  {hero.headline}
</h1>

          {/* Subheading */}
          <p className="mt-6 text-xl md:text-2xl text-neutral-300 max-w-3xl">
            {hero.subheading}
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap gap-4">
            <Button
              onClick={() => scrollToSection("solution")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg group"
            >
              Explore Our Model
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-neutral-500 text-white px-8 py-6 text-lg"
            >
              Partner With Us
            </Button>
          </div>

          {/* Stats */}
          
        </div>
      </div>
    </section>
  );
};

export default Hero;