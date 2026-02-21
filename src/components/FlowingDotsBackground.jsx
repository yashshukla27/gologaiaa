import { useEffect, useRef } from "react";

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

    // High density like Accenture
    const DOT_COUNT = 900;

    const dots = Array.from({ length: DOT_COUNT }, () => {
      const lane = Math.random(); // controls S-curve layering
      return {
        x: Math.random() * canvas.width,
        baseY:
          canvas.height * (0.4 + lane * 0.25),
        speed: 0.4 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
        size: 0.6 + Math.random() * 0.9,
        amplitude: 18 + Math.random() * 28,
      };
    });

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(dot => {
        // Flow left → right
        dot.x += dot.speed;

        // S-curve motion
        const y =
          dot.baseY +
          Math.sin(dot.x * 0.008 + time * 0.02 + dot.phase) *
            dot.amplitude;

        // Reset when off-screen
        if (dot.x > canvas.width + 20) {
          dot.x = -20;
        }

        // Edge fade (Accenture-style)
        const fade =
          Math.min(
            dot.x / 400,
            (canvas.width - dot.x) / 400,
            1
          );

        ctx.beginPath();
        ctx.arc(dot.x, y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 255, 140, ${0.95 * fade})`; // bright emerald
        ctx.fill();
      });

      time += 1;
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

export default FlowingDotsBackground;
