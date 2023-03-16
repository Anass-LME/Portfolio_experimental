import React from 'react'
import { motion } from "framer-motion";
import './Reveal_X.css'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export default function Reveal_X() {
  return (
    <motion.svg
      width="600px"
      height="600px"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
      <motion.line
        x1="200"
        y1="100"
        x2="500"
        y2="500"
        stroke="#000"
        stroke-width="40"
        variants={draw}
        custom={4}
      />
      <motion.line
        x1="220"
        y1="570"
        x2="360"
        y2="430"
        stroke="#000"
        stroke-width="40"
        variants={draw}
        custom={4.5}
      />
    </motion.svg>
  );
}

