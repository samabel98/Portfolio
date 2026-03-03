import './Projects.css'

const projects = [
  {
    idx: '01',
    title: 'TRIAS — Emergency Module',
    desc: 'Led end-to-end development of the Emergency Department module for the TRIAS EHR platform. Designed and built multiple sub-modules covering triage, patient intake, and emergency workflows. Owned both the Angular frontend and Node.js backend while mentoring 3 junior developers through the build.',
    stack: ['Angular', 'Node.js', 'MySQL', 'Express.js'],
  },
  {
    idx: '02',
    title: 'TRIAS PNG — International Platform',
    desc: 'Built the international version of TRIAS deployed for hospitals in Papua New Guinea. Led the Admin Module with Role-Based Access Control (RBAC) for secure user management, and introduced system-wide Data Masking to protect sensitive patient information under strict international privacy standards.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'RBAC', 'Data Masking'],
  },
  {
    idx: '03',
    title: 'TRIAS 3.0 — Platform Upgrade',
    desc: 'Contributed to the major platform upgrade — developed Data Masking and the Masters module with an emphasis on reusable, modular components. Worked across Angular frontend and Node.js backend, with MongoDB and PostgreSQL powering the data layer for improved performance and scalability.',
    stack: ['Angular', 'Node.js', 'MongoDB', 'PostgreSQL'],
  },
  {
    idx: '04',
    title: 'TRIAS Mobile — Doctor\'s App',
    desc: "Built and maintained the mobile app used by doctors for real-time patient data access and clinical workflow management. Designed for clinical environments — fast, reliable, and fully connected to the same backend systems as the web platform to enable seamless care coordination across devices.",
    stack: ['React Native', 'Node.js', 'REST API', 'MongoDB'],
  },
]

export default function Projects() {
  return (
    <section className="section proj-section" id="projects">
      <div className="s-label">Projects</div>
      <h2 className="s-heading reveal">Real software,<br />real users.</h2>
      <div className="proj-grid reveal">
        {projects.map((p) => (
          <div className="proj-card" key={p.idx}>
            <div className="proj-bar" />
            <div className="proj-idx">{p.idx}</div>
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-desc">{p.desc}</p>
            <div className="proj-stack">
              {p.stack.map((s) => (
                <span className="stag" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
