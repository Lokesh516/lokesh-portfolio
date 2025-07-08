import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:lokeshyadav31290@gmail.com">lokeshyadav31290@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:8074508848">8074508848</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/lokesh-goddumarri-8717741ab/"
            target="_blank"
            rel="noreferrer"
          >
            lokesh-goddumarri-8717741ab
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
