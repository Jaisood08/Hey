import { ReactNode, useEffect, useRef, useState } from 'react'

interface FadeUpProps {
  children: ReactNode
  as?: 'div' | 'li'
  className?: string
}

// Minimal replacement for the AOS "fade-up" effect used on the About page.
export default function FadeUp({ children, as = 'div', className = '' }: FadeUpProps) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as
  return (
    <Tag ref={ref} className={`fade-up${visible ? ' fade-up-visible' : ''} ${className}`.trim()}>
      {children}
    </Tag>
  )
}
