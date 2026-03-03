import './About.css'

const facts = [
  { key: 'Based in', value: 'Chennai, India' },
  { key: 'Experience', value: '2+ Years' },
  { key: 'Domain', value: 'Healthcare Tech' },
]

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="s-label">About Me</div>
      <h2 className="s-heading reveal">I write code that<br />runs in hospitals.</h2>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            Sam Abel J. is a full stack developer from Chennai with 2+ years building healthcare software at Triquetra Healthcare.
            He works across the entire stack — <span className="g">Angular interfaces</span> used by clinical staff,{' '}
            <span className="g">Node.js microservices</span> handling patient data, and{' '}
            <span className="g">MySQL/PostgreSQL schemas</span> built for reliability.
            His work shipped across India and internationally in Papua New Guinea.
          </p>
        </div>
        <div className="about-facts reveal">
          {facts.map((f) => (
            <div className="fact" key={f.key}>
              <span className="fk">{f.key}</span>
              <span className="fv">{f.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
