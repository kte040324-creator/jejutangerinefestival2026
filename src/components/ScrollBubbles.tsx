import { useCallback, useEffect, useRef } from 'react'

type Bubble = {
  x: number
  y: number
  radius: number
  startTime: number
  duration: number
  drift: number
  speed: number
}

type Props = {
  bubbleColor?: string
  maxBubbles?: number
  spawnPerScroll?: number
  children: React.ReactNode
}

export default function ScrollBubbles({
  bubbleColor = 'rgba(255, 255, 255, 0.35)',
  maxBubbles = 80,
  spawnPerScroll = 4,
  children,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const bubblesRef = useRef<Bubble[]>([])
  const rafRef = useRef<number | null>(null)
  const lastScrollYRef = useRef(0)
  const scrollAccumRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resizeCanvas = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])

  const spawnBubbles = useCallback(
    (count: number) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const w = canvas.width
      const h = canvas.height
      const now = performance.now()

      const newBubbles: Bubble[] = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: h + Math.random() * 60,
        radius: 4 + Math.random() * 10,
        startTime: now,
        duration: 1200 + Math.random() * 800,
        drift: (Math.random() - 0.5) * 80,
        speed: 0.8 + Math.random() * 0.6,
      }))

      bubblesRef.current = [...bubblesRef.current, ...newBubbles].slice(-maxBubbles)
    },
    [maxBubbles],
  )

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      const delta = current - lastScrollYRef.current
      lastScrollYRef.current = current

      if (delta > 0) {
        scrollAccumRef.current += delta
        const threshold = 50
        while (scrollAccumRef.current >= threshold) {
          scrollAccumRef.current -= threshold
          spawnBubbles(spawnPerScroll)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [spawnBubbles, spawnPerScroll])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      bubblesRef.current = bubblesRef.current.filter((b) => {
        const elapsed = timestamp - b.startTime
        if (elapsed >= b.duration) return false

        const progress = elapsed / b.duration
        const eased = 1 - Math.pow(1 - progress, 1.5)

        const riseDistance = eased * canvas.height * b.speed
        const driftOffset = Math.sin(progress * Math.PI * 2) * b.drift
        const y = canvas.height + 20 - riseDistance
        const x = b.x + driftOffset * eased

        const alpha = 0.4 * (1 - progress) * (1 - progress)
        ctx.beginPath()
        ctx.arc(x, y, b.radius * (1 - progress * 0.3), 0, Math.PI * 2)
        ctx.fillStyle = bubbleColor.replace(/[\d.]+\)$/g, `${alpha})`)
        ctx.fill()

        ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.6})`
        ctx.lineWidth = 1
        ctx.stroke()

        return true
      })

      rafRef.current = window.requestAnimationFrame(draw)
    }

    rafRef.current = window.requestAnimationFrame(draw)
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }, [bubbleColor])

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100%' }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          userSelect: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          zIndex: 40,
        }}
      />
      {children}
    </div>
  )
}
