import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
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
        texts={["Software Engineer", "Full Stack Developer", "Tech Enthusiast"]}
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
          href="https://drive.google.com/file/d/1ydXHjDIvGVSWidQxSfTeVRl8mWyLjyl7/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View Resume
        </a>
        <a
          href="/src/assets/Rakesh_Reddy_SD.pdf"
          download="Rakesh_Kumar_Resume.pdf"
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
          href="https://www.linkedin.com/in/rakesh-kumar-44304b324/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:rakeshkodathala@gmail.com" title="Email">
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
