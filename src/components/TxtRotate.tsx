import { useEffect, useState } from 'react'

interface TxtRotateProps {
  phrases: string[]
  period?: number
}

// Port of the original TxtRotate typewriter script from index.html.
export default function TxtRotate({ phrases, period = 2 }: TxtRotateProps) {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  useEffect(() => {
    const fullTxt = phrases[loopNum % phrases.length]
    let delta = 300 - Math.random() * 100
    if (isDeleting) delta /= 2

    if (!isDeleting && text === fullTxt) {
      delta = period
    } else if (isDeleting && text === '') {
      delta = 500
    }

    const timer = setTimeout(() => {
      if (!isDeleting && text === fullTxt) {
        setIsDeleting(true)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      } else {
        setText(
          isDeleting
            ? fullTxt.substring(0, text.length - 1)
            : fullTxt.substring(0, text.length + 1),
        )
      }
    }, delta)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, phrases, period])

  return (
    <span className="txt-rotate">
      <span className="wrap">{text}</span>
    </span>
  )
}
