
import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  a: number
}

export default function ParticlesCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0
    let H = 0
    let pts: Particle[] = []
    let raf = 0

    function resize() {
      W = canvas!.width  = canvas!.offsetWidth
      H = canvas!.height = canvas!.offsetHeight
    }

    function mkPts() {
      pts = Array.from({ length: 90 }, () => ({
        x:  Math.random() * W,
        y:  Math.random() * H,
        r:  Math.random() * 1.8 + 0.3,
        vx: (Math.random() - 0.5) * 0.36,
        vy: (Math.random() - 0.5) * 0.36,
        a:  Math.random(),
      }))
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H)
      pts.forEach(p => {
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(0,230,118,${p.a * 0.38})`
        ctx!.fill()
        p.x += p.vx
        p.y += p.vy
        p.a += (Math.random() - 0.5) * 0.014
        p.a  = Math.max(0.04, Math.min(0.95, p.a))
        if (p.x < -5) p.x = W + 5
        if (p.x > W + 5) p.x = -5
        if (p.y < -5) p.y = H + 5
        if (p.y > H + 5) p.y = -5
      })
      raf = requestAnimationFrame(draw)
    }

    resize()
    mkPts()
    draw()

    const onResize = () => { resize(); mkPts() }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}
