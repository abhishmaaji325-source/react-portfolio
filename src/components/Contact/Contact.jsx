import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <p className="contact-subtitle">
        Feel free to reach out for internships, projects, or collaborations.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;