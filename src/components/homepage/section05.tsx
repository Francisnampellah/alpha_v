"use client"

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Section_05() {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 10000); // Switch visibility every 10 seconds
    
    return () => clearInterval(interval);
  }, []);

  const text = "Innovating the Future of Technology";
  
  return (
    <>
    <div className="w-full py-8 my-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ 
            x: isVisible ? 0 : "-100%",
            transition: { 
              duration: 15,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }
          }}
          className="flex items-center"
        >
          <div className="flex items-center space-x-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-black whitespace-nowrap"
            >
              {text}
            </motion.h1>
            <motion.span 
              className="text-4xl md:text-6xl mx-4"
              animate={{
                scale: [1, 1.2, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              ✦
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-black whitespace-nowrap"
            >
              {text}
            </motion.h1>
            <motion.span 
              className="text-4xl md:text-6xl mx-4"
              animate={{
                scale: [1, 1.2, 1],
                transition: { duration: 2, repeat: Infinity }
              }}
            >
              ✦
            </motion.span>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}