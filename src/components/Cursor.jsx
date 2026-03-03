import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
    }
    document.addEventListener('mousemove', onMove)

    const tick = () => {
      const { mx, my } = pos.current
      pos.current.rx += (mx - pos.current.rx) * 0.13
      pos.current.ry += (my - pos.current.ry) * 0.13
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + 'px'
        cursorRef.current.style.top = my + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx + 'px'
        ringRef.current.style.top = pos.current.ry + 'px'
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    const expand = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '54px'
        ringRef.current.style.height = '54px'
        ringRef.current.style.borderColor = 'rgba(200,240,96,0.75)'
      }
    }
    const shrink = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '36px'
        ringRef.current.style.height = '36px'
        ringRef.current.style.borderColor = 'rgba(200,240,96,0.35)'
      }
    }

    const interactives = document.querySelectorAll('a, button, input, textarea')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', expand)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', expand)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
