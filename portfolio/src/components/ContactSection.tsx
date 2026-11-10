function ContactSection() {
  return (
    <section className="block contact reveal" id="contact">
      <h2>
        <span className="num">04</span>Contact
      </h2>
      <p>If you would like to get in touch, please reach out via email or connect with me on LinkedIn.</p>
      <div className="contact-info">
        <a href="mailto:tnyhynh@gmail.com">
          tnyhynh@gmail.com <span className="arrow" aria-hidden="true">→</span>
        </a>
        <a href="https://www.linkedin.com/in/tony-huynh-cs/" target="_blank" rel="noreferrer">
          LinkedIn <span className="arrow" aria-hidden="true">↗</span>
        </a>
        <a href="https://github.com/TonyHuynh-lab" target="_blank" rel="noreferrer">
          GitHub <span className="arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
