import { motion } from "framer-motion";

export const RightArrow = () => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }} // Initial position (left of screen) and hidden
      animate={{ x: 50, opacity: 1 }} // Animate to the right
      transition={{
        type: "spring", // Smooth spring-like transition
        stiffness: 100, // Defines the "bounce" of the spring
        damping: 10, // Reduces the bounciness
        duration: 1, // Total time of animation
        repeat: Infinity, // Repeat the animation infinitely
        repeatType: "reverse", // Reverse animation on repeat
      }}
      style={{
        display: "inline-block",
        fontSize: "40px",
      }}
    >
      ➡️ {/* Right arrow emoji */}
    </motion.div>
  );
};
