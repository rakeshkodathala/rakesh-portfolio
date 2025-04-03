import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-text">
          Feel free to reach out if you’d like to collaborate, connect, or just
          say hi!
        </p>

        <div className="contact-links">
          <a
            href="mailto:rakeshkodathala@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            📧 rakeshkodathala@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/rakesh-kumar-44304b324/"
            target="_blank"
            rel="noreferrer"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
