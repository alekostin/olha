"use client";

import { motion } from "framer-motion";

const variants = {
  visible: {
    y: 0,
    opacity: 1,

    transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
  },
  hidden: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function AnimatedHeader({ children }) {
  const containerStyles = {
    /* display: "flex",
    justifyContent,
    alignItems,
    height: "100%", // or any height you need
    width: "100%",  */
    // or any width you need
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      style={containerStyles}
    >
      {children}
    </motion.div>
  );
}
