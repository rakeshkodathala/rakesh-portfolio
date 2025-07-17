import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
} from "react-icons/fa";
import { motion } from "framer-motion";
import TypingText from "../TypingText/TypingText"; // adjust if needed
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      {/* 🔵 Glowing animated blob */}
      <div className="home-blob" />

      {/* 👋 Hero title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm <span>Rakesh Kumar</span>
      </motion.h1>

      {/* ✨ Typewriter subtitle */}
      <TypingText
        texts={["Software Engineer", "Developer", "Coder"]}
        speed={80}
        pause={1500}
      />

      {/* 🧑‍🎓 Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        Software Developer. Passionate about building cool stuff.
      </motion.p>

      {/* 📄 Resume Buttons */}
      <motion.div
        className="resume-buttons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        <a
          href="https://drive.google.com/file/d/1y57SSIB06p8FYeDK7IkTWPOh6Nm0PtUb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View Resume
        </a>
        <a
          href="/src/assets/Rakesh_Resume.pdf"
          download="Rakesh_Resume.pdf"
          className="download-button"
        >
          <FaDownload />
          Download Resume
        </a>
      </motion.div>

      {/* 🌐 Social Icons */}
      <motion.div
        className="social-icons"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
      >
        <a
          href="https://github.com/rakeshkodathala"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rakesh-kumar-107740199/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:rakeshreddy98666@gmail.com" title="Email">
          <FaEnvelope />
        </a>
        <a
          href="https://leetcode.com/u/Rakesh_kodathala/"
          target="_blank"
          rel="noreferrer"
          title="LeetCode"
        >
          <FaCode />
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
