"use client";

import { motion } from "framer-motion";
import React from "react";

import { AnimatedWrapperType } from "@/lib/interface";

export default function AnimatedWrapper({
  children,
  direction = "up",
  delay = 0,
  className,
}: AnimatedWrapperType) {
  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -50 };
      case "right":
        return { opacity: 0, x: 50 };
      case "up":
      default:
        return { opacity: 0, y: 50 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
