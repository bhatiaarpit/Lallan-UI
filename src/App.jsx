import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [prevCursorPosition, setPrevCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      // Calculate cursor velocity
      const velocity = {
        x: e.clientX - prevCursorPosition.x,
        y: e.clientY - prevCursorPosition.y,
      };

      // Update cursor position
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setPrevCursorPosition({ x: e.clientX, y: e.clientY });

      // Update cursor position with velocity
      const cursor = document.querySelector('.cursor');
      if (cursor) {
        cursor.style.setProperty('--cursor-x', `${e.clientX-20}px`);
        cursor.style.setProperty('--cursor-y', `${e.clientY-20}px`);
        cursor.style.setProperty('--cursor-velocity-x', `${velocity.x}px`);
        cursor.style.setProperty('--cursor-velocity-y', `${velocity.y}px`);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [prevCursorPosition]);

  return (
    <body>
      <Navbar />
      <Hero />
      <motion.div className="cursor" />
    </body>
  );
};

export default App;
