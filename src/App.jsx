import { useEffect, useRef } from 'react'
import Home from './pages/Home.jsx'

function CustomCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX - 5 + 'px'
      cursor.style.top = mouseY - 5 + 'px'
    }

    const animate = () => {
      ringX += (mouseX - ringX - 20) * 0.12
      ringY += (mouseY - ringY - 20) * 0.12
      ring.style.left = ringX + 'px'
      ring.style.top = ringY + 'px'
      requestAnimationFrame(animate)
    }

    const onMouseDown = () => {
      cursor.style.transform = 'scale(2)'
      ring.style.transform = 'scale(0.7)'
    }
    const onMouseUp = () => {
      cursor.style.transform = 'scale(1)'
      ring.style.transform = 'scale(1)'
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    animate()

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  )
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <Home />
    </>
  )
}
