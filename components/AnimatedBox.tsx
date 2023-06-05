"use client";

import { motion } from "framer-motion";

interface AnimatedBoxProps {
  className?: string;
  children: React.ReactNode;
}
const AnimatedBox = ({ children, className }: AnimatedBoxProps) => {
  return (
    <motion.div
      className={className}
      viewport={{ once: false }}
      animate={{
        opacity: [0, 1],
        y: [-200, 0],
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
      exit={{ opacity: [1, 0] }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBox;
