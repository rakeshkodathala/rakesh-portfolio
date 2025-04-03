import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  "C/C++",
  "Java",
  "JavaScript",
  "Spring",
  "Hibernate",
  "MySQL",
  "DSA",
  "Node.js",
  "React.js",
  "MongoDB",
  "Linux",
  "Git & GitHub",
  "Xcode",
  "IntelliJ",
  "VS Code",
  "Jira",
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.h2
          className="skills-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <motion.div
          className="skills-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="skill-tag"
              variants={fadeUpVariants}
              custom={i}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
