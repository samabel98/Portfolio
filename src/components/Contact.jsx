import './Contact.css'

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="s-label">Contact</div>
      <div className="contact-inner reveal">
        <h2 className="contact-headline">
          Let's get<br /><span>in touch.</span>
        </h2>
        <p className="contact-sub">
          Have a role or project in mind? Reach out.
        </p>
        <div className="contact-links">
          <a
            href="mailto:samabel180@gmail.com"
            className="c-link"
          >
            <div>
              <div className="c-lbl">Email</div>
              <div className="c-val">samabel180@gmail.com</div>
            </div>
            <span className="c-arr">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sam-abel-j-bb2553139/"
            target="_blank"
            rel="noreferrer"
            className="c-link"
          >
            <div>
              <div className="c-lbl">LinkedIn</div>
              <div className="c-val">sam-abel</div>
            </div>
            <span className="c-arr">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
