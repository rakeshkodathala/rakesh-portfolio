import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";
import "./Work.css";

const workExperience = [
  {
    role: "Software Engineer",
    company: "Mindtree",
    year: "2021 – 2022",
    icon: <FaBriefcase />, // 🎯 Add this
    logo: "/mindtree.png",
    location: "Chennai, India",
    duration: "Jun 2021 – May 2022",
    description:
      "Worked with Lincoln Financial Group. Built backend APIs and enterprise-level features using Java, Spring Boot, and MySQL.",
    tech: ["Java", "Spring Boot", "MySQL"],
  },
  {
    role: "Backend Developer Intern",
    company: "Increff",
    year: "2021",
    icon: <FaLaptopCode />, // 💻 Add this
    logo: "/increff.jpg",
    location: "Bengaluru, India",
    duration: "Jan 2021 – May 2021",
    description:
      "Developed POS system and backend features for StoreJini platform using Spring, Hibernate, Thymeleaf, and MySQL.",
    tech: ["Spring", "Hibernate", "Thymeleaf", "MySQL"],
  },
];

const Work = () => {
  return (
    <section id="work" className="work">
      <h2 className="work-title">Work Experience</h2>

      <div className="timeline">
        {workExperience.map((job, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            {/* Year Label */}
            <div className="year-label">{job.year}</div>

            {/* Icon Dot */}
            <div
              className={`timeline-dot ${index % 2 === 0 ? "left" : "right"}`}
              title={job.role}
            >
              {job.icon}
            </div>

            {/* Work Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="work-card"
            >
              <div className="work-top">
                <div className="work-company">
                  <img src={job.logo} alt={job.company} />
                  <div>
                    <h3>
                      {job.role} @ {job.company}
                    </h3>
                    <p>{job.location}</p>
                  </div>
                </div>
                <span className="work-duration">{job.duration}</span>
              </div>

              <p className="work-desc">{job.description}</p>

              <div className="tech-tags">
                {job.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
