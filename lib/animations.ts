import { Variants } from "framer-motion";

export const blurInUp: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.3, // stagger by index
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};
