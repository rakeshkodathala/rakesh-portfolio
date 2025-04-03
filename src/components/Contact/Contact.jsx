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
          <a href="mailto:rakesh@example.com" target="_blank" rel="noreferrer">
            📧 rakesh@example.com
          </a>
          <a
            href="https://www.linkedin.com/in/rakesh-kumar-reddy-kodathala-107740199/"
            target="_blank"
            rel="noreferrer"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/rakeshkodathala"
            target="_blank"
            rel="noreferrer"
          >
            🐙 GitHub
          </a>
          <a
            href="https://leetcode.com/Rocky_10/"
            target="_blank"
            rel="noreferrer"
          >
            🧠 LeetCode
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
