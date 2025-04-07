"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

interface MWSTiltContainerProps {
  children: React.ReactNode;
  tiltScalar?: number;
  className?: string;
}

export default function MWSTiltContainer(props: MWSTiltContainerProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const tiltScalar = props.tiltScalar ? props.tiltScalar : 20;

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    const tiltX = -(offsetY / rect.height) * tiltScalar;
    const tiltY = (offsetX / rect.width) * tiltScalar;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          perspective: "1000px",
        }}
        className={`overflow-hidden ${props.className}`}
      >
        <motion.div
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: "transform 0.2s ease-out",
            width: "100%",
            height: "100%",
          }}
        >
          {props.children}
        </motion.div>
      </motion.div>
    </>
  );
}
