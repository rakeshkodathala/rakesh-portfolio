import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode, FaIdBadge, FaCode } from "react-icons/fa";
import "./Work.css";

const workExperience = [
  {
    role: "Software Developer",
    company: "HCL",
    year: "2025",
    icon: <FaBriefcase />, // 🎯 Add this
    logo: "hcl.jpeg",
    location: "Irving, TX",
    duration: "Jun 2021 – May 2022",
    description:
      "Developed and deployed a scalable backend system using Node.js and AWS services (EC2, S3, ELB), written 30 RESTful APIs",
    tech: ["JavaScript", "TypeScript", "React", "NodeJS", "AWS"],
  },
  {
    role: "Software Engineer Intern",
    company: "Zinnia LLC",
    year: "2023",
    icon: <FaCode />, // 💻 Add this
    logo: "Zinnia.jpeg",
    location: "Topeka, KS",
    duration: "May 2023 – Dec 2023",
    description: "Migrated a Legacy application from VB Script to NodeJS ",
    tech: ["React", "NodeJS", "ExpressJS", "MySQL", "SSIS"],
  },
  {
    role: "Software Engineer",
    company: "Mindtree",
    year: "2021",
    icon: <FaLaptopCode />, // 💻 Add this
    logo: "mindtree.png",
    location: "Hyderabad, India",
    duration: "Jun 2021 – May 2022",
    description:
      "Worked with Lincoln Financial Group. Built backend APIs and enterprise-level features using Java, Spring Boot, and MySQL.",
    tech: ["Spring", "Hibernate", "Java", "MySQL"],
  },
  {
    role: "Junior Software Engineer",
    company: "OLX",
    year: "2020",
    icon: <FaIdBadge />, // 💻 Add this
    logo: "olx.jpeg",
    location: "Hyderabad, India",
    duration: "Nov 2019 – May 2021",
    description:
      "Developed and optimized responsive SPAs using React.js and JavaScript within a micro frontend setup, improved page performance and user engagement.",
    tech: ["NodeJS", "JavaScript", "ReactJS", "MySQL"],
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
