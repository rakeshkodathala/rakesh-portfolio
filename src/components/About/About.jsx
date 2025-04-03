import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <img src="/about.jpeg" alt="Rakesh" className="about-image" />
        <div>
          <h2 className="about-heading">About Me</h2>
          <ul className="about-list">
            <li>Graduate student at UMKC</li>
            <li>Ex Software Engineer @ Mindtree</li>
            <li>B.Tech 2021 Grad from GITAM University</li>
            <li>Love learning new technologies</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
