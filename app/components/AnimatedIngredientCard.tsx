"use client";

import { motion } from "framer-motion";
import { useMouse } from "@/hooks/useMouse";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { useEffect, useState, type ReactNode } from "react";

export function AnimatedIngredientCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const [mouse, ref] = useMouse();

  const gradientSize = 400;

  const [isTouch, setIsTouch] = useState(false);

  // Detect if the user is on a touch device
  useEffect(() => {
    const handleTouchStart = () => setIsTouch(true);
    const handleMouseMove = () => setIsTouch(false);

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Set CSS vars
  useEffect(() => {
    if (ref.current) {
      const x = isTouch
        ? ref.current.offsetWidth / 2
        : mouse.elementX ?? ref.current.offsetWidth / 2;
      const y = isTouch
        ? ref.current.offsetHeight / 2
        : mouse.elementY ?? ref.current.offsetHeight / 2;

      ref.current.style.setProperty("--x", `${x}px`);
      ref.current.style.setProperty("--y", `${y}px`);
    }
  }, [mouse.elementX, mouse.elementY, isTouch, ref]);

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative group overflow-hidden rounded-xl transition-transform hover:scale-[1.015] active:scale-95",
        className
      )}
    >
      {/* Spotlight gradient */}
      <motion.div
        className="absolute z-50 pointer-events-none rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        animate={{
          left: mouse.elementX ?? 0,
          top: mouse.elementY ?? 0,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.15,
        }}
        style={{
          width: gradientSize,
          height: gradientSize,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255, 80, 80, 0.40), transparent 70%)",
          mixBlendMode: "screen", // or try lighten
          filter: "blur(50px)", // Optional: softens the glow
          maskImage: "linear-gradient(white, white)",
          WebkitMaskImage: "linear-gradient(white, white)",
        }}
      />

      {/* Glowing border on hover or tap */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-xl before:absolute before:inset-0 before:rounded-xl before:border before:border-transparent before:transition-opacity before:duration-300 before:opacity-0 group-hover:before:opacity-100 before:content-['']"
        style={{
          background: isTouch
            ? // Full glow for mobile
              "radial-gradient(600px circle at center, rgba(255, 0, 100, 0.4), transparent 70%)"
            : // Mouse-follow glow
              "radial-gradient(700px circle at var(--x, 50%) var(--y, 50%), rgba(255, 0, 100, 0.4), transparent 70%)",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "2px",
        }}
      />
      {/* Inner Card Content */}
      <Card className="relative py-6 gap-6 z-20 h-full border border-white/11 bg-background/50 backdrop-blur">
        {children}
      </Card>
    </motion.div>
  );
}
