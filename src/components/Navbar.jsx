import './Navbar.css'

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <a href="#" className="nav-logo">
        Sam<span>.</span>
      </a>
      <ul className="nav-links">
        <li><button onClick={() => scrollTo('about')}>About</button></li>
        <li><button onClick={() => scrollTo('skills')}>Skills</button></li>
        <li><button onClick={() => scrollTo('experience')}>Experience</button></li>
        <li><button onClick={() => scrollTo('projects')}>Projects</button></li>
        <li>
          <button className="nav-cta" onClick={() => scrollTo('contact')}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  )
}
