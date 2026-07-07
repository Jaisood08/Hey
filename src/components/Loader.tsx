import { useEffect, useState } from 'react'

// Replicates Load.js: full-screen loading GIF, hidden ~1s after the page is ready.
export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null
  return <div id="Jload" />
}
