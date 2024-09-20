import { motion } from "framer-motion";

type AlertProps = {
  message: string;
  onClose: () => void;
};

export const Alert = ({ message, onClose }: AlertProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
      animate={{ opacity: 1, y: 0 }} // Fade in and move to the correct position
      exit={{ opacity: 0, y: 50 }} // Fade out and move back down
      transition={{ duration: 0.5 }} // Animation timing
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "15px 20px",
        backgroundColor: "#ff7675",
        color: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        zIndex: 1000,
      }}
    >
      <p>{message}</p>
      <button
        onClick={onClose}
        style={{
          marginTop: "10px",
          padding: "5px 10px",
          borderRadius: "5px",
          backgroundColor: "white",
          color: "#ff7675",
          border: "none",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </motion.div>
  );
};
