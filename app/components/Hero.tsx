"use client";

import Image from "next/image";
import SquigglyLines from "./SquigglyLines";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-between lg:flex-row gap-2 p-4">
      <div className="flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
          }}
          transition={{ 
            duration: 0.6, 
            delay: 0.1,
            ease: "easeOut"
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
            priority
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        </motion.div>
        
        {/* Optimized floating particles - reduced from 20 to 5 for performance */}
        <motion.div
          className="absolute -top-4 -right-4 size-4 bg-red-500/60 rounded-full"
          animate={{
            y: [0, -10, 0],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/4 -left-6 w-3 h-3 bg-yellow-500/60 rounded-full"
          animate={{
            y: [0, -8, 0],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute -bottom-4 -left-4 w-4 h-4 bg-orange-500/60 rounded-full"
          animate={{
            y: [0, 12, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-6 w-2 h-2 bg-purple-500/50 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
        <motion.div
          className="absolute top-3/4 -left-6 w-3 h-3 bg-green-500/50 rounded-full"
          animate={{
            y: [0, 10, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        />
      </motion.div>
    </div>
  );
}
