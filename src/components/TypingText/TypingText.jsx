import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingText = ({ texts = [], speed = 70, pause = 1500 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const pauseTimeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, pause);
      return () => clearTimeout(pauseTimeout);
    }
  }, [charIndex, textIndex, texts, speed, pause]);

  return (
    <motion.div
      className="subtitle"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      {displayText}
      <span className="blinking-cursor">|</span>
    </motion.div>
  );
};

export default TypingText;
