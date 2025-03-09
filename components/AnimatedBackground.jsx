import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Layer 1: Animated radial gradient */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-pink-500 opacity-60"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Layer 2: Animated diagonal gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 opacity-40 mix-blend-overlay"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Layer 3: Subtle motion effect to create depth */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tl from-green-500 via-blue-500 to-purple-500 opacity-30 mix-blend-screen"
        animate={{ x: [-30, 30, -30], y: [-30, 30, -30] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "mirror" }}
      />
    </div>
  );
};

export default AnimatedBackground;
