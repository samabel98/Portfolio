import './Experience.css'

const highlights = [
  { num: '3', desc: 'Junior developers mentored' },
  { num: '2', desc: 'Countries — India & Papua New Guinea' },
  { num: '4', desc: 'Product versions shipped' },
  { num: '∞', desc: 'Patient records handled with care' },
]

const tags = [
  'Angular', 'React', 'Node.js', 'Express.js', 'MySQL',
  'PostgreSQL', 'MongoDB', 'React Native', 'Sequelize', 'REST APIs', 'Microservices', 'Azure',
]

export default function Experience() {
  return (
    <section className="section exp-section" id="experience">
      <div className="s-label">Experience</div>
      <h2 className="s-heading reveal">Where I've done<br />the work.</h2>

      <div className="exp-card reveal">
        <div className="exp-head">
          <div>
            <div className="exp-co">Triquetra Healthcare &amp; Technology</div>
            <div className="exp-ro">Full Stack Developer</div>
          </div>
          <div className="exp-right">
            <div className="exp-per">Aug 2022 — Aug 2024</div>
            <div className="exp-loc">Bangalore, India</div>
          </div>
        </div>
        <div className="exp-body">
          <p className="exp-story">
            TRIAS is a healthcare EHR platform running in hospitals across India and internationally in Papua New Guinea.
            I owned the Emergency Module end-to-end — architecture, Angular frontend, Node.js backend, and guiding three junior developers through the build.
            The work carried real stakes — patient records, emergency workflows, and clinical staff depending on what I shipped.
            Two years, four product versions, real clinical stakes.
          </p>
          <div className="exp-nums">
            {highlights.map((h) => (
              <div className="en-box" key={h.num}>
                <div className="en-n">{h.num}</div>
                <div className="en-d">{h.desc}</div>
              </div>
            ))}
          </div>
          <div className="exp-tags">
            {tags.map((t) => (
              <span className="etag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
