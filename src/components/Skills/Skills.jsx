import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaJenkins,
  FaLinux,
  FaWindows,
  FaNodeJs,
  FaAngular,
  FaAmazon,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDjango,
  SiSpringboot,
  SiKubernetes,
  SiJira,
  SiIntellijidea,
  SiBootstrap,
  SiJupyter,
  SiDotnet,
} from "react-icons/si";
import "./Skills.css";

const categories = {
  Languages: [
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Java", icon: <FaJava /> },

    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <FaJs /> },

    { name: "SQL", icon: <SiMysql /> },
    { name: "C/C++", icon: <span className="text-sm font-semibold"></span> },
    { name: "C#", icon: <span className="text-sm font-semibold"></span> },
  ],
  Databases: [
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
  ],
  Frameworks: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: ".NET", icon: <SiDotnet /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "React", icon: <FaReact /> },

    { name: "AngularJS", icon: <FaAngular /> },
  ],
  Web: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    {
      name: "REST APIs",
      icon: <span className="text-sm font-medium">API</span>,
    },
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Jira", icon: <SiJira /> },
    { name: "Jenkins", icon: <FaJenkins /> },
  ],
  Cloud: [{ name: "AWS", icon: <FaAmazon /> }],
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

        {Object.entries(categories).map(([category, skills], index) => (
          <motion.div
            key={category}
            className="skills-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="skills-category-title">{category}</h3>
            <div className="skills-list">
              {skills.map((skill, i) => (
                <span key={i} className="skill-tag">
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
