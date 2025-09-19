"use client";

import { motion } from "framer-motion";
import ProductList from "./ProductList";

export default function AnimatedTextSection() {
  return (
    <>
      <motion.h2 
        className="font-heading text-center text-5xl sm:text-3xl md:text-6xl font-semibold"
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          transition: { 
            duration: 0.8, 
            ease: "easeOut",
            delay: 0.2 
          }
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Featured products
      </motion.h2>
      <motion.p 
        className="text-muted-foreground max-w-3xl mx-auto text-center py-8 sm:text-lg sm:leading-7 leading-normal"
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          transition: { 
            duration: 0.7, 
            ease: "easeOut",
            delay: 0.4 
          }
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Explore our lineup of nutrient-packed, flavor-loaded superhero
        butters. Each jar is crafted with powerful ingredients to fuel your
        body and mind. Choose your hero and start your journey to greatness!
      </motion.p>
      
    </>
  );
}
