import { useEffect, useState } from 'react'

interface CountUpProps {
  end: number
  duration?: number
}

// Replicates the CSS @property counter animation: 0 -> end over 5s, once.
export default function CountUp({ end, duration = 5000 }: CountUpProps) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let start: number | null = null
    let frame: number
    const step = (timestamp: number) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setValue(Math.floor(progress * end))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [end, duration])

  return <div style={{ textAlign: 'center' }}>{value}</div>
}
