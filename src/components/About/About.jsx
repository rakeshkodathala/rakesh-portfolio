import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <img
          src="Rakesh.jpeg"
          alt="Rakesh"
          className="about-image"
          loading="lazy"
        />

        <div className="about-content">
          <h2 className="about-heading">About Me</h2>
          <p className="about-intro">
            I'm a passionate software developer who enjoys building impactful
            digital experiences. With a strong foundation in full-stack
            development and a keen eye for design, I love crafting clean,
            scalable code.
          </p>

          <ul className="about-list">
            <li>💼 Software Development Engineer @ Amazon</li>
            <li>🎓 Graduate Student @ University of Missouri</li>
            <li>🛠 Currently exploring modern tech & system design</li>
            <li>🚀 Passionate about learning, building & growing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
