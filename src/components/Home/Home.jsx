import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      {/* 🔵 Animated blob background */}
      <div className="home-blob" />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm <span>Rakesh Kumar</span>
      </motion.h1>

      {/* ✨ Animated subtitle instead of Typewriter */}
      <motion.h3
        className="subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Software Engineer · Full Stack Developer · Tech Enthusiast
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        Graduate Student at University of Missouri Kansas City, passionate about
        software development and building cool stuff.
      </motion.p>

      {/* 🎓 Resume buttons */}
      <motion.div
        className="resume-buttons"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        <a
          href="https://docs.google.com/document/..."
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View Resume
        </a>

        <a
          href="/resume.pdf"
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
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rakesh-kumar-reddy-kodathala-107740199/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:rakesh@example.com">
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
