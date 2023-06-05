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
        y: [-100, 0],
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedBox;
