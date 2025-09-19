"use client";

import Image from "next/image";
import SectionText from "./SectionText";
import { motion } from "framer-motion";

export default function SuperdankoBrain() {
  return (
    <section className="pt-20 md:mt-22 relative pb-8">
      <div className=" mx-auto max-w-7xl px-4 md:px-8 flex items-center flex-col md:flex-row">
        <div className="flex flex-col items-center  max-w-screen-xl md:flex-row lg:justify-between">
          <SectionText
            tagline="Happiness in Every Jar"
            title="Fuel Your Mind, Defeat Negativity"
            text="Your brain needs magnesium to create serotonin, the happiness molecule. SuperDanko Butters are packed with magnesium-rich ingredients to help you fight stress, anxiety, and negativity. Be the hero of your own story—spread happiness, one spoonful at a time."
            buttonText="Read our blog"
            href='/blog'
            animated={true}
          />

          <motion.div 
            className="relative flex-shrink-0 md:w-6/12"
            initial={{ opacity: 0, scale: 0.8, rotateX: -15, rotateZ: -3 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1, 
              rotateX: 0,
              rotateZ: 0,
              transition: { 
                duration: 1.2, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.1 
              }
            }}
            viewport={{ once: true, amount: 0.4 }}
            whileHover={{ 
              scale: 1.03,
              rotateX: 10,
              rotateZ: 2,
              transition: { duration: 0.4 }
            }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl"
              initial={{ 
                boxShadow: "0 0 0 0 rgba(255, 255, 255, 0)",
                filter: "brightness(0.9) saturate(0.8)"
              }}
              whileInView={{
                boxShadow: "0 15px 35px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                filter: "brightness(1) saturate(1)",
                transition: { duration: 1, delay: 0.4 }
              }}
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                filter: "brightness(1.1) saturate(1.2) contrast(1.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="relative"
                initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                whileInView={{ 
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  transition: { duration: 1.0, delay: 0.3, ease: "easeOut" }
                }}
              >
                <Image
                  src="/images/superdanko_fuel.jpg"
                  alt="Superdanko Brain"
                  width={1200}
                  height={700}
                  className="rounded-2xl"
                />
              </motion.div>
              
              {/* Neural network effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/10 rounded-2xl"
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Thought bubbles */}
              <motion.div
                className="absolute -top-8 -left-4 w-6 h-6 bg-blue-400/30 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.4, 0.8, 0.4],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -top-6 -right-6 w-4 h-4 bg-purple-400/40 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.3, 0.7, 0.3],
                  scale: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-5 h-5 bg-indigo-400/35 rounded-full"
                animate={{
                  y: [0, -25, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.6, 1.2, 0.6],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
              
              {/* Energy waves */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
