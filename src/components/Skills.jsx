import { useState } from 'react'
import './Skills.css'

const skillGroups = [
  {
    icon: '◈',
    title: 'Frontend',
    items: ['Angular v17', 'React', 'React Native', 'TypeScript', 'JavaScript (ES6+)', 'HTML & CSS', 'Material-UI'],
  },
  {
    icon: '⬡',
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Sequelize ORM', 'RESTful APIs', 'Microservices', 'Unit Testing'],
  },
  {
    icon: '⬢',
    title: 'Data & Infra',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Azure', 'Git & GitHub', 'Postman'],
  },
]

export default function Skills() {
  const [active, setActive] = useState(null)

  return (
    <section className="section skills-section" id="skills">
      <div className="s-label">Skills</div>
      <h2 className="s-heading reveal">Tools I reach<br />for every day.</h2>
      <div className="skills-grid reveal">
        {skillGroups.map((group, gi) => (
          <div
            className={`sk-col ${active === gi ? 'sk-active' : ''}`}
            key={group.title}
            onMouseEnter={() => setActive(gi)}
            onMouseLeave={() => setActive(null)}
          >
            <span className="sk-icon">{group.icon}</span>
            <div className="sk-title">{group.title}</div>
            <div className="sk-list">
              {group.items.map((item, ii) => (
                <div
                  className="sk-item"
                  key={item}
                  style={{ transitionDelay: active === gi ? `${ii * 30}ms` : '0ms' }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
