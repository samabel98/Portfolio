import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="hero">
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-eyebrow">Full Stack Developer · Chennai, India</div>
        <h1 className="hero-title">
          <span className="line"><span className="li">Building</span></span>
          <span className="line"><span className="li outline">things</span></span>
          <span className="line"><span className="li accent-text">that work.</span></span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-desc">
            Angular, React, Node.js, and everything in between. 2+ years shipping healthcare software used by real doctors, on real patients.
          </p>
          <div className="hero-actions">
            <button className="btn btn-accent" onClick={() => scrollTo('projects')}>
              See my work ↓
            </button>
            <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>
              Let's talk
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
