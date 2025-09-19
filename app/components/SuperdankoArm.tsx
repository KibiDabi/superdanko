"use client";

import Image from "next/image";
import SectionText from "./SectionText";
import { motion } from "framer-motion";

export default function SuperdankoArm({
  align = "right",
}: {
  align?: "left" | "center" | "right";
}) {
  return (
    <section className="pt-20 md:mt-22 relative pb-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex items-center flex-row-reverse">
        <div className="flex flex-col items-center  max-w-screen-xl md:flex-row lg:justify-between">
          <SectionText
            tagline="Strength for Every Super Action"
            title="Power Up Your Body, Inside and Out"
            text="Strengthen your heart, bones, and joints. Boost your skin's glow and fuel your muscles. SuperDanko is loaded with omega-3 and omega-6 fats, proteins, and minerals to power you through every challenge—at home, at work, or in action. Be unstoppable."
            buttonText="Learn about us"
            href="/about"
            align={align}
            animated={true}
          />
          <motion.div 
            className="relative flex-shrink-0 md:w-6/12"
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1, 
              rotateY: 0,
              transition: { 
                duration: 1.2, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.3 
              }
            }}
            viewport={{ once: true, amount: 0.4 }}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              transition: { duration: 0.4 }
            }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              initial={{ boxShadow: "0 0 0 0 rgba(220, 38, 38, 0)" }}
              whileHover={{
                boxShadow: "0 20px 40px -12px rgba(220, 38, 38, 0.4), 0 0 0 1px rgba(220, 38, 38, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="relative"
                initial={{ filter: "brightness(0.8)" }}
                whileInView={{ 
                  filter: "brightness(1)",
                  transition: { duration: 1, delay: 0.5 }
                }}
                whileHover={{ 
                  filter: "brightness(1.1) contrast(1.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <Image
                  src="/images/superdanko_power.jpg"
                  alt="Superdanko Power"
                  width={1200}
                  height={700}
                  className="rounded-2xl"
                />
              </motion.div>
              
              {/* Power lines effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent rounded-2xl"
                initial={{ x: "-100%", opacity: 0 }}
                whileHover={{ 
                  x: "100%", 
                  opacity: 1,
                  transition: { duration: 0.8, ease: "easeInOut" }
                }}
              />
              
              {/* Energy pulse effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-600/15 rounded-2xl"
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            
            {/* Power particles */}
            <motion.div
              className="absolute -top-6 -right-6 w-4 h-4 bg-red-500 rounded-full"
              animate={{
                y: [0, -30, 0],
                x: [0, 10, 0],
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-3 h-3 bg-red-400 rounded-full"
              animate={{
                y: [0, 20, 0],
                x: [0, -8, 0],
                opacity: [0.3, 0.9, 0.3],
                scale: [0.7, 1.1, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
            />
            <motion.div
              className="absolute top-1/2 -right-8 w-2 h-2 bg-red-600 rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.7, 0.2],
                scale: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />
            {/* Additional power particles scattered around middle and above the image */}
            <motion.div
              className="absolute -top-8 -right-12 w-1.5 h-1.5 bg-orange-500/60 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.7, 1.2, 0.7],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.4,
              }}
            />
            <motion.div
              className="absolute top-1/6 -left-10 w-2.5 h-2.5 bg-yellow-500/50 rounded-full"
              animate={{
                y: [0, -25, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-500/70 rounded-full"
              animate={{
                y: [0, -18, 0],
                opacity: [0.3, 0.9, 0.3],
                scale: [0.5, 1.4, 0.5],
              }}
              transition={{
                duration: 1.9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.2,
              }}
            />
            <motion.div
              className="absolute top-1/4 -right-6 w-3 h-3 bg-purple-500/40 rounded-full"
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [0.6, 1.1, 0.6],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.8,
              }}
            />
            <motion.div
              className="absolute top-2/3 left-1/4 w-1.5 h-1.5 bg-cyan-500/55 rounded-full"
              animate={{
                y: [0, -22, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [0.7, 1.2, 0.7],
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />
            <motion.div
              className="absolute top-1/2 right-1/3 w-2 h-2 bg-lime-500/50 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 2.9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.1,
              }}
            />
            <motion.div
              className="absolute top-1/6 left-1/3 w-1 h-1 bg-emerald-500/65 rounded-full"
              animate={{
                y: [0, -16, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.4, 1.5, 0.4],
              }}
              transition={{
                duration: 2.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.9,
              }}
            />
            <motion.div
              className="absolute top-1/2 -left-8 w-2.5 h-2.5 bg-rose-500/45 rounded-full"
              animate={{
                y: [0, -28, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [0.7, 1.2, 0.7],
              }}
              transition={{
                duration: 3.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
