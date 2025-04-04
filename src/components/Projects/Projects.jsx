import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Project.css";

const projects = [
  {
    title: "ChatApp",
    description:
      "Developed a real time chat application using MERN stack to brush up my knowledge.",
    image: "chat.png",
    tech: ["NodeJS", "ExpressJS", "React", "MongoDB"],
    github: "https://github.com/rakeshkodathala/chatApp",
    demo: "https://chat-app-82m6.vercel.app/",
  },
  {
    title: "YoutubeClone",
    description:
      "Point-of-Sale application for brand & inventory management. Supports invoicing, reporting, and CRUD operations.",
    image: "yt.png",
    tech: ["MongoDB", "ExpressJS", "React", "NodeJS"],
    github: "",
    demo: "",
  },
  {
    title: "Nine Men's Morris Game",
    description:
      "Real-time strategic board game with multiplayer functionality. Players aim to form 'mills' and eliminate opponent's pieces.",
    image: "nine-men.jpeg",
    tech: [
      "C#",
      ".NET",
      "WPF",
      "Visual Studio 2019",
      "Web Sockets",
      "Design Patterns",
      "OOP",
    ],
    github: "https://github.com/rakeshkodathala/Nine-Men-Morris-game",
    demo: "https://your-demo-link.com",
  },

  // {
  //   title: "POS System - Increff",
  //   description:
  //     "Point-of-Sale application for brand & inventory management. Supports invoicing, reporting, and CRUD operations.",
  //   image: "/pos.jpg",
  //   tech: ["Spring Boot", "Hibernate", "Thymeleaf", "MySQL"],
  //   github: "https://github.com/artiam99/Increff_Point_of_Sale",
  //   demo: "",
  // },
];

const Projects = () => {
  return (
    <section id="project" className="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="project-card"
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />

            <div className="project-content">
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="code-btn"
                >
                  <FaGithub />
                  Code
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="live-btn"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
