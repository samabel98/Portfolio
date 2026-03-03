import './Marquee.css'

const items = [
  'Angular', 'React', 'Node.js', 'TypeScript', 'MySQL',
  'PostgreSQL', 'MongoDB', 'Redis', 'Express.js', 'React Native', 'Azure', 'REST APIs'
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className={i % (items.length) === items.length - 1 || (i % items.length === items.length - 1) ? '' : ''}>
            <span className="m-text">{item}</span>
            <span className="m-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
