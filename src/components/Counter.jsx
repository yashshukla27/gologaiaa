"use client";
import { useEffect, useState } from "react";

export default function Counter({ start = 0, end = 100, duration = 1000 }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const percent = Math.min(progress / duration, 1);

      const currentValue = Math.floor(
        start + (end - start) * percent
      );

      setCount(currentValue);

      if (percent < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return <span>{count}</span>;
}
