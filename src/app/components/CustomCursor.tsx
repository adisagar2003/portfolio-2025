'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updatePointerState = () => {
      const element = document.elementFromPoint(mousePosition.x, mousePosition.y);
      setIsPointer(element?.tagName === 'A' || element?.tagName === 'BUTTON' || 
                  element?.getAttribute('role') === 'button' ||
                  window.getComputedStyle(element!).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', updatePointerState);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updatePointerState);
    };
  }, [mousePosition]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div className="w-8 h-8 rounded-full bg-white relative">
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-sm" />
          {/* Outer ring */}
          <div className="absolute -inset-1 rounded-full border border-cyan-500/50 animate-pulse" />
        </div>
      </motion.div>

      {/* Trailing cursor */}
      <motion.div
        className="fixed pointer-events-none z-40 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 1.2 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.2,
        }}
      >
        <div className="w-4 h-4 rounded-full bg-cyan-500/50 blur-sm" />
      </motion.div>
    </>
  );
};

export default CustomCursor; 