"use client";

import { motion } from "framer-motion";

const textVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
  },
  hidden: {
    opacity: 0,
    transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function AnimatedImage({
  children,
  justifyContent = "center",
  alignItems = "center",
}) {
  const containerStyles = {
    display: "flex",
    justifyContent,
    alignItems,
    height: "auto", // or any height you need
    width: "100%", // or any width you need
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariants}
      style={containerStyles}
    >
      {children}
    </motion.div>
  );
}
