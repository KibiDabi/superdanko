"use client";

import Image from "next/image";
import SquigglyLines from "./SquigglyLines";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row gap-2 p-4">
      <div className="flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
          }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="font-heading font-semibold tracking-tight text-center md:text-left leading-tight sm:leading-snug md:leading-none text-6xl sm:text-6xl md:text-7xl xl:text-big lg:text-9xl"
        >
          This is not your{" "}
          <motion.span 
            className="relative inline-block md:whitespace-nowrap text-red-600"
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              transition: { 
                duration: 0.8, 
                delay: 0.8,
                ease: "backOut"
              }
            }}
          >
            <SquigglyLines />
            <span className="relative">ordinary</span>{" "}
          </motion.span>{" "}
          Peanut Butter
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <motion.div
            className="flex items-center gap-2 text-lg font-medium text-muted-foreground"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span>Premium Quality</span>
          </motion.div>
          
          <motion.div
            className="flex items-center gap-2 text-lg font-medium text-muted-foreground"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-3 h-3 bg-blue-500 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <span>Supercharged Ingredients</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotateY: 0,
        }}
        transition={{
          opacity: { duration: 1, delay: 0.5 },
          scale: { duration: 1, delay: 0.5, ease: "backOut" },
          rotateY: { duration: 1, delay: 0.5, ease: "easeOut" },
        }}
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          transition: { duration: 0.3 }
        }}
        className="flex-auto relative"
      >
        <motion.div
          className="relative"
          animate={{
            rotate: [0, -2, 2, -2, 2, 0],
          }}
          transition={{
            delay: 3,
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 8,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/SUPERDANKO_piksa.png"
            alt="SuperDanko Premium Peanut Butter"
            width={970}
            height={970}
            className="drop-shadow-2xl"
          />
        </motion.div>
        
        {/* Floating particles around the jar - well composed and pleasing */}
        <motion.div
          className="absolute -top-4 -right-4 w-4 h-4 bg-red-500/60 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 -left-6 w-3 h-3 bg-yellow-500/60 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.7, 1.1, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 w-5 h-5 bg-orange-500/60 rounded-full"
          animate={{
            y: [0, 25, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-8 w-2 h-2 bg-purple-500/50 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.5, 1.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute top-3/4 -left-8 w-3 h-3 bg-green-500/50 rounded-full"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/6 -left-4 w-2 h-2 bg-pink-500/50 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.4, 1.4, 0.4],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
        <motion.div
          className="absolute -top-2 left-1/2 w-2 h-2 bg-blue-500/50 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [0.7, 1.1, 0.7],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
          }}
        />
        <motion.div
          className="absolute -bottom-2 right-1/4 w-3 h-3 bg-indigo-500/50 rounded-full"
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [0.5, 1.3, 0.5],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-500/50 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-emerald-500/50 rounded-full"
          animate={{
            y: [0, 25, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [0.7, 1.1, 0.7],
          }}
          transition={{
            duration: 3.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        {/* Additional particles scattered around middle and above the image */}
        <motion.div
          className="absolute -top-6 left-1/4 w-1.5 h-1.5 bg-rose-500/60 rounded-full"
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.6, 1.3, 0.6],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <motion.div
          className="absolute -top-8 right-1/5 w-2.5 h-2.5 bg-violet-500/50 rounded-full"
          animate={{
            y: [0, -22, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
        />
        <motion.div
          className="absolute top-1/6 left-1/5 w-1 h-1 bg-amber-500/70 rounded-full"
          animate={{
            y: [0, -12, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [0.5, 1.4, 0.5],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.1,
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-teal-500/45 rounded-full"
          animate={{
            y: [0, -28, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.7, 1.1, 0.7],
          }}
          transition={{
            duration: 3.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.8,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-2/3 w-1.5 h-1.5 bg-fuchsia-500/55 rounded-full"
          animate={{
            y: [0, -25, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.6, 1.2, 0.6],
          }}
          transition={{
            duration: 2.9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.9,
          }}
        />
        <motion.div
          className="absolute top-2/3 left-1/2 w-2 h-2 bg-lime-500/50 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: 2.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.3,
          }}
        />
        <motion.div
          className="absolute -top-4 right-2/3 w-1 h-1 bg-sky-500/65 rounded-full"
          animate={{
            y: [0, -16, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [0.4, 1.5, 0.4],
          }}
          transition={{
            duration: 2.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.4,
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-2.5 h-2.5 bg-orange-400/55 rounded-full"
          animate={{
            y: [0, -24, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        />
        <motion.div
          className="absolute top-3/5 left-3/4 w-1.5 h-1.5 bg-stone-500/50 rounded-full"
          animate={{
            y: [0, -14, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [0.6, 1.3, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.7,
          }}
        />
      </motion.div>
    </div>
  );
}
