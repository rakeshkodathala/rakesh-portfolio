import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <img src="Rakesh.jpeg" alt="Rakesh" className="about-image" />
        <div>
          <h2 className="about-heading">About Me</h2>
          <ul className="about-list">
            <li>Software Developer</li>
            <li>Ex Software Engineer Intern @ Zinnia</li>
            <li>Graduate student from University of Missouri Kansas City</li>
            <li>Love learning new technologies</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
