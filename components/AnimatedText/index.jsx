"use client";

import { motion } from "framer-motion";

const textVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.8, duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function AnimatedText({ children }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={textVariants}>
      {children}
    </motion.div>
  );
}
